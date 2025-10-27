const { models } = require("../libs/sequelize");
const nodemailer = require('nodemailer');
const boom = require('@hapi/boom')
const MailService = require('./mailService')
const { config } = require("../config/config");
const jwt = require("jsonwebtoken");

const find=()=>{
    const Empleados = models.Empleados.findAll({
      include: [
        "estudios"
      ],
    })
    return Empleados
};
const findOne = async (id) => {
    const Empleado = await models.Empleados.findByPk(id, {
      include: [
        "estudios"
      ],
    })
  
    if(!Empleado) throw boom.notFound('Empleado no encontrado')
  
    return Empleado
}

const findByCedula = async (cedula) => {
  const empleado = await models.Empleados.findOne({
    where:{
      rowId: cedula
    },
    include: [
      "estudios"
    ],
  })
  if(!empleado) throw boom.notFound('Empleado no encontrado')
  return empleado
}

const create = async(body)=>{
    const newEmpleado = await models.Empleados.create(body)
    return newEmpleado    
}

const update = async (id, changes) => {
    const Empleado = await findOne(id)
    const updatedEmpleado = await Empleado.update(changes)
  
    return updatedEmpleado
}

const sendMail = async (body) => {
    try{
      /* console.log(body) */
      /* codigo */
      console.log(`codigo: ${body.codigo}`)
      const payload = {
        id: body.codigo
      }
      const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "24h" })

        const transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
            port: 465,
            secure: true,
            auth: {
            user: config.smtpEmail,
            pass: config.smtpPassword
            }
        });
      const mail = {
        /* from: 'Clientes@granlangostino.net', */
        from: config.smtpEmail,
        to: 'contabilidad3@granlangostino.net',
        cc: 'recursoshumanos2@granlangostino.com, oficialdecumplimiento@granlangostino.com',
        subject: 'Nueva Solicitud',
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
            <title>Nuevo registro de empleado</title>
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
                <h1>¡${body.type === 'creacion' ? 'Nueva' : 'Actualización de'} solicitud de registro!</h1>
              </div>

              <div class="invoice-details">
                <table width="100%">
                  <tr>
                    <td>
                      <p><strong>Cordial saludo,</strong></p>
                      <br/>
                      <p><strong>Se ha ${body.type === 'creacion' ? 'generado una nueva' : 'actualizado una' } solicitud de registro de empleado: ${body.razonSocial}, con número de identificación: ${body.rowId}</strong></p>
                      <br/>
                      <div class="warning">
                        <b>Para visualizar la información Ingresa aquí ${config.empleadoUrl}/${token}</b>                  
                      </div>
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
      const rta = await MailService.sendEmails(mail)
      return rta
      /* transporter.sendMail(mail,(error,info)=>{
        if(error){
            return console.log('Error al enviar el correo al cliente:', error);
        }else{
            console.log('Correo electrónico enviado:', info.response);
        }
      }) */
    }catch (error) {
      console.error('Error al solicitar el nuevo registro:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  }

const respuesta = async (body) => {
  try{
    const mail = {
      /* from: 'Clientes@granlangostino.net', */
      from: config.smtpEmail,
      to: 'recursoshumanos2@granlangostino.com',
      cc: 'contabilidad3@granlangostino.net, oficialdecumplimiento@granlangostino.com',
      subject: 'Nuevo Cambio en su Solicitud',
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
          <title>Cambio en su Solicitud de Registro</title>
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
              <h1>¡Cambio en su Solicitud de Registro!</h1>
            </div>

            <div class="invoice-details">
              <table width="100%">
                <tr>
                  <td>
                    <p><strong>Cordial saludo,</strong></p>
                    <br/>
                    <p><strong>Se ha realizado un cambio en su solicitud de registro de empleado</strong></p>
                    <br/>
                    <p><strong>Descripcion Empleado:</strong></p>
                    <p><strong>Cédula:${body.cedula}</strong></p>
                    <p><strong>Nombre:${body.nombre}</strong></p>
                    <p><strong>Agencia:${body.agencia}</strong></p>
                    <br/>
                    <p><strong>A continuación, encontrará un link que lo llevará a nuestra página web donde podrá
                    visualizar los cambios con más detalles</strong></p>
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
    const rta = await MailService.sendEmails(mail)
    return rta
  }catch (error) {
    console.error('Error al solicitar el nuevo registro:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

module.exports={
    find,
    create,
    findOne,
    findByCedula,
    update,
    sendMail,
    respuesta,
}