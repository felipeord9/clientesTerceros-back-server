const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { Client } = require('smb2');
const rimraf = require('rimraf');
const fsExtra = require('fs-extra');
const { execSync } = require('child_process');
const { promisify } = require('util');

const router = express.Router();

//const upload = multer({ dest: 'uploads/' });
const upload = multer({ dest: '/GestionHumana/Empleados/' });

router.post('/', upload.fields([
    /* second form */
    { name: 'Cedula' },
    { name: 'Contrato' },
    { name: 'Infemp' },
    { name: 'HV' },
    { name: 'Eps' },
    { name: 'CajaCompensacion' },
    { name: 'OtroSi' },
    { name: 'ExamenIngreso' },
    { name: 'Escolaridad' },
    { name: 'Arl' },
    { name: 'Otros' },
  ]), async (req, res) => {
    try {
        const { folderName, employeeName } = req.body;
        
        // En Linux la ruta debe ser absoluta y existir
        const baseDir = '/GestionHumana/Empleados';
        const targetPath = path.join(baseDir, folderName);

        // 1. Asegurar que la carpeta destino exista (mkdir -p)
        await fsExtra.ensureDir(targetPath);

        // 2. Procesar los archivos usando for...of (SÍ espera a que termine cada uno)
        if (req.files) {
            const categories = Object.keys(req.files);
            
            for (const category of categories) {
                const files = req.files[category];
                
                for (const file of files) {
                    const extension = path.extname(file.originalname);
                    // Nombre limpio: Cedula-JUAN_PEREZ.pdf
                    const finalFileName = `${file.fieldname}-${employeeName.replace(/\s+/g, '_')}${extension}`;
                    const finalDest = path.join(targetPath, finalFileName);

                    // Mover de /tmp a la carpeta final (atómico y seguro)
                    await fsExtra.move(file.path, finalDest, { overwrite: true });
                }
            }
        }

        console.log(`✅ Carpeta ${folderName} procesada con éxito.`);
        res.status(200).send('Archivos guardados correctamente');

    } catch (error) {
        console.error('❌ Error en el servidor:', error);
        res.status(500).send('Error interno al procesar archivos');
    }

    console.log('Carpeta enviada correctamente.');
});

router.get('/archivo-empleado/:carpeta/:archivo', (req, res) => {
    const { carpeta, archivo } = req.params;
    const rutaArchivo = path.join('/GestionHumana/Empleados/', carpeta, archivo);
    //const rutaArchivo = path.join('/aplicativoterceros/', carpeta, archivo);
    // const rutaArchivo = path.join('/192.168.4.237/aplicativoterceros/',carpeta,archivo);
    res.sendFile(rutaArchivo);
});

router.get('/archivos/emplaedo',(req,res)=>{
  const folderName = req.params.folderName;
  const rutaRecursoCompartido = '/192.168.4.237/GestionHumana/Empleados';

  // Ruta remota en el recurso compartido donde deseas guardar la carpeta
  const rutaRemota = `${rutaRecursoCompartido}\\${folderName}`;
  fsExtra.readdir(rutaRemota, (err, files) => {
    if (err) {
      console.error('Error al obtener archivos:', err);
      return;
    }

    console.log('Archivos en la carpeta compartida:', files);
  });
})

/* eliminar una carpeta */
router.delete('/:folderName', (req,res)=>{
    const folderName = req.params.folderName;
    //const rutaArchivo = path.join(`C:/Users/Practicante 2/Downloads/${folderName}`);
  const folderPath = path.join(`/GestionHumana/Empleados/${folderName}`);

    fsExtra.remove(rutaArchivo)
      .then(() => {
        console.log('Carpeta eliminada correctamente');
      })
      .catch((err) => {
        console.error(`Error al eliminar la carpeta: ${err.message}`);
      });if (err) {
        console.error(err);
        return res.status(500).send('Error al eliminar la carpeta');
      }
});

module.exports=router
