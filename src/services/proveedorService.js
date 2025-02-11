const { models } = require("../libs/sequelize");
const nodemailer = require('nodemailer');

const find=()=>{
    const Proveedores = models.Proveedores.findAll()
    return Proveedores
};
const findOne = async (id) => {
    const Proveedor = await models.Proveedores.findByPk(id)
  
    if(!Proveedor) throw boom.notFound('Tercero no encontrado')
  
    return Proveedor
}
const findByCedula = async (cedula) => {
    const proveedor = await models.Proveedores.findOne({
     where: {cedula }
  })
  
    if(!proveedor) throw boom.notFound('Proveedor no encontrado')
  
    return proveedor
  }

const create = async(body)=>{
    const newProveedor = await models.Proveedores.create(body)
    return newProveedor    
}

const update = async (id, changes) => {
    const proveedor = await findOne(id)
    const updatedProveedor = await proveedor.update(changes)
  
    return updatedProveedor
}

const validarProveedor = async (cedula)=>{
    const Proveedor = await models.Proveedores.findOne({
        where:{cedula:cedula}
    })
    if(!Proveedor) throw boom.notFound('Proveedor no encontrado')
    return Proveedor
}

const remove = async(id)=>{
    const proveedor = findOne(id)
    ;(await proveedor).destroy(id)
}

const removeByCedula = async(cedula)=>{
    const proveedor = await findByCedula(cedula)
    await proveedor.destroy(cedula)
    return cedula
}

const sendMail = async (body) => {
    try{
        const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
            user: 'oficialdecumplimiento@granlangostino.com',
            pass: 'Ofici4l@2024'
            }
        });
      const mail = {
        /* from: 'Clientes@granlangostino.net', */
        from: 'oficialdecumplimiento@granlangostino.com',
        to: ['felipeord9@gmail.com'],
        subject: 'Nueva Solicitud de Creación',
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700;900&display=swap"
              rel="stylesheet"
            />
            <title>CERTIFICADO RETENCIÓN POR ICA</title>
            <style>
              body {
                font-family: Arial, sans-serif;;
                line-height: 1.5;
                color: #333;
                margin: 0;
                padding: 0;
              }

              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
              }

              .header {
                background-color: #f03c3c;
                padding: 5px;
                text-align: center;
              }

              .header h1 {
                color: #fff;
                font-size: medium;
                margin: 0;
              }

              .invoice-details {
                margin-top: 20px;
              }

              .invoice-details p {
                margin: 0;
              }

              .logo {
                text-align: right;
              }

              .logo img {
                max-width: 200px;
              }

              .invoice-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }

              .invoice-table th,
              .invoice-table td {
                padding: 10px;
                border: 1px solid #ccc;
                text-align: center;
              }

              .invoice-table th {
                background-color: #f1f1f1;
              }

              .warning {
                text-align: center;
                margin-top: 20px;
              }

              .warning p {
                margin: 0;
              }

              .att {
                text-align: center;
                margin-top: 20px;
              }

              .att p {
                margin: 0;
              }

              .att a {
                text-decoration: none;
              }

              .footer {
                margin-top: 20px;
                text-align: center;
                color: #888;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>¡Nueva Solicitud de Creación!</h1>
              </div>

              <div class="invoice-details">
                <table width="100%">
                  <tr>
                    <td>
                      <p><strong>Cordial saludo,</strong></p>
                      <br/>
                      <p><strong>Se ha generado una nueva solicitud de creación de: ${body.tipoFormulario}
                       de la agencia: ${body.agencia}</strong></p>
                      <br/>
                      <p><strong>${body.razonSocial}</strong></p>
                      <br/>
                      <p><strong>A continuación, encontrará un link que lo llevará a nuestra página web donde podrá
                      visualizar las solicitudes con más detalles</strong></p>
                      <p>http://localhost:3000/solicitudes</p>
                      <br/>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="footer">
                <p><u>Aviso Legal</u></p>
                <p>
                  SU CORREO LO TENEMOS REGISTRADO DENTRO DE NUESTRA BASE DE
                  DATOS COMO CORREO/CONTACTO CORPORATIVO (DATO PÚBLICO), POR LO TANTO,
                  SI NO DESEA SEGUIR RECIBIENDO INFORMACIÓN DE NUESTRA EMPRESA, LE
                  AGRADECEMOS NOS INFORME AL RESPECTO.</p>
                 <p> El contenido de este mensaje de
                  correo electrónico y todos los archivos adjuntos a éste contienen
                  información de carácter confidencial y/o uso privativo de EL GRAN
                  LANGOSTINO S.A.S y de sus destinatarios. Si usted recibió este mensaje
                  por error, por favor elimínelo y comuníquese con el remitente para
                  informarle de este hecho, absteniéndose de divulgar o hacer cualquier
                  copia de la información ahí contenida, gracias. En caso contrario
                  podrá ser objeto de sanciones legales conforme a la ley 1273 de 2009.
                </p>
              </div>
            </div>
          </body>
        </html>
        `
      }
      transporter.sendMail(mail,(error,info)=>{
        if(error){
            return console.log('Error al enviar el correo al cliente:', error);
        }else{
            console.log('Correo electrónico enviado:', info.response);
        }
      })
    }catch (error) {
      console.error('Error al solicitar recuperación de contraseña:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  }

module.exports={
    find,
    create,
    findOne,
    remove,
    validarProveedor,
    update,
    removeByCedula,
    findByCedula,
    sendMail,
}