const mailService = require("../services/mailService");
const { config } = require("../config/config");
const path = require("path");

const sendMail = async (req, res, next) => {
  try {
    const { info } = req.body;
    const body = JSON.parse(info);
    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          * {
          font-size: 8px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          thead {
            background-color: #d6d6d6;
            color: #000;
          }
          tbody {
            display: block;
            min-height: 100vh;
          }
          tr {
            display: table;
            width: 100%;
            table-layout: fixed;

          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
        </style>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            padding: 1rem 2rem;
          "
        >
          <h1 style="text-align: center; font-size: 13px; font-weight: bold">PEDIDO DE VENTA</h1>
          <div style="position: relative; font-size: 8px; width: 100%; height: 100%;">
            <div style="margin: auto;">
              <h2 style="font-size: 8px; font-weight: bolder; margin: 0">
                EL GRAN LANGOSTINO S.A.S.
              </h2>
              <p style="margin: 0.3rem 0;"><strong>Nit: 835001216</strong></p>
              <p style="margin: 0.3rem 0;">Tel: 5584982 - 3155228124</p>
            </div>
            <div
              style="
                position: absolute;
                border: 1px solid black;
                width: 200px;
                top: 0;
                right: 0;
              "
            >
              <p style="border-bottom: 1px solid black; background-color: #d6d6d6; padding: 0.3rem 0.5rem; margin: 0;"><strong>No.${
                body.seller.co
              }-PDV-${body.id}</strong></p>
              <p style="padding: 0.2rem 0.5rem; margin: 0; white-space: nowrap;"><strong>Fecha: </strong>${new Date().toLocaleString(
                "es-CO"
              )}</p>
            </div>
          </div>
          <hr style="width: 100%; border: 1.5px solid black;"/>
          <div style="width: 100%; font-size: 13px; margin-top: 10px;">
            <div style="position: relative; margin-bottom: 2rem;">
              <div style="position: relative; border: 1px solid black; border-radius: 5px; width: 55%; padding: 1rem;">
                <h3 style="background: #fff; font-size: 8px; position: absolute; top: -8px; left: 25px; margin: 0; padding: 0px 10px;">Cliente</h3>
                <div>
                  <p style="margin: 0; width: 100%;"><strong style="margin-right: 0.5rem;">Nombre: </strong>${
                    body.client.description
                  }</p>
                </div>
                <div>
                  <p style="margin: 0; width: 100%;"><strong style="margin-right: 0.5rem;">Sucursal: </strong>${
                    body.branch.description
                  }</p>
                </div>
                <div>
                  <p style="margin: 0; width: 100%;"><strong style="margin-right: 0.5rem;">Nit: </strong>${
                    body.client.id
                  }</p>
                </div>
              </div>
              <div style="position: absolute; top: 0; right: 0; border: 1px solid black; border-radius: 5px; width: 35%; padding: 1rem;">
                <div>
                  <p style="margin: 0; width: 100%;"><strong style="margin-right: 0.5rem;">C.O: </strong>${
                    body.seller.co
                  }</p>
                </div>
                <div>
                  <p style="margin: 0; width: 100%;"><strong style="margin-right: 0.5rem;">Orden Compra: </strong>${
                    body.purchaseOrder
                  }</p>
                </div>
                <div>
                  <p style="margin: 0; width: 100%;"><strong style="margin-right: 0.5rem; white-space: nowrap;">Fecha Entrega:</strong>${
                    body.deliveryDate
                  }</p>
                </div>
                <div>
                  <p style="margin: 0; width: 100%;"><strong style="margin-right: 0.5rem; white-space: nowrap;">Vendedor:</strong>${
                    body.seller.description
                  }</p>
                </div>
              </div>
            </div>
            <div style="width: 100%; border: 1px solid black;">
              <table style="width: 100%; height: 100%;">
                <thead>
                  <tr>
                    <th style="width: 30px;">Ref.</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>UM</th>
                    <th>Precio Un</th>
                    <th>Valor Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${body.products.agregados.map((elem) => {
                    return `
                        <tr>
                          <td style="width: 30px;">${elem.id}</td>
                          <td>${elem.description}</td>
                          <td>${elem.amount}</td>
                          <td>${elem.um}</td>
                          <td>$${elem.price}</td>
                          <td>$${elem.total}</td>
                        </tr>
                        `;
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="fw-bold">TOTAL</td>
                    <td colspan="4"></td>
                    <td className="fw-bold text-end">$${
                      body.products.total
                    }</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div style="position: relative; border: 1px solid black; margin-top: 1rem;">
              <h3 style="background: #fff; font-size: 8px; position: absolute; top: -8px; left: 25px; margin: 0; padding: 0px 10px;">Observaciones</h3>
              <p style="margin: 0; padding: 1rem;">
              ${body.observations}
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
    const txt = `C.O,NIT TERCERO,SUCURSAL,ORDEN_COMPRA,NOTAS,ID_TERCERO,REFERENCIA,UM,CANTIDAD,PRECIO
      ${body.products.agregados.map(
        (elem) =>
          `${body.seller.co},${body.client.id},${body.branch.branch},${body.purchaseOrder},${body.observations},${body.seller.id},${elem.id},${elem.um},${elem.amount},${elem.price}\n`
      )}`;

    const transporter = await mailService.sendEmails();
    mailService.generatePDF(html, (error, pdfBuffer) => {
      if (error) {
        return res.status(400).json({
          status: "ERROR",
          error,
        });
      }

      const attachments = [
        {
          /* filename: `No-${body.nombreTercero}-PDV-${body.tercero}.pdf`, */
          filename: `No.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
        /* {
          filename: `No-${body.seller.co}-PDV-${body.id}.txt`,
          content: txt,
        }, */
      ];

      req.file &&
        attachments.push({
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        });

      transporter.sendMail(
        {
          from: config.smtpEmail,
          /* to: "felipeord9@gmail.com", */
          /* to: "practicantesistemas@granlangostino.net", */
          to: body.correoEnvio,
          //to: body.seller.mailAgency,
          //cc: body.seller.mailCommercial,
          subject: "¡NUEVO PEDIDO DE VENTA!",
          attachments,
          html: `
          <!DOCTYPE html>
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
              <title>PEDIDO DE VENTA</title>
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
                  <h1>¡NUEVO PEDIDO DE VENTA!</h1>
                </div>
          
                <div class="invoice-details">
                  <table width="100%">
                    <tr>
                      <td>
                        <p><strong>Número de factura:</strong> ${body.id}</p>
                        <p><strong>Cliente:</strong> ${body.client.description}</p>
                        <p><strong>Sucursal:</strong> ${body.branch.description}</p>
                        <p><strong>Vendedor:</strong> ${body.seller.description}</p>
                      </td>
                      <td class="logo">
                        <img
                          src="https://sucursales.granlangostino.com/wp-content/uploads/2022/12/cropped-Logo-el-gran-langostino.png"
                          alt="Logo de la empresa"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
          
                <div class="warning">
                  <p><strong>Por favor revisar los archivos antes de cualquier acción.</strong></p>
                </div>
          
                <div class="att">
                  <p>Cordialmente,</p>
                  <p>
                    EL GRAN LANGOSTINO S.A.S <br>
                    Línea Nacional 018000 180133 <br>
                    Calle 13 #32-417 Bodega 4 Acopi - Yumbo, Valle <br> 
                    <a href="https://tienda.granlangostino.com/">www.granlangostino.com</a>
                  </p>
                </div>
          
                <div class="footer">
                  <p><u>Aviso Legal</u></p>
                  <p>
                    SU CORREO LO TENEMOS REGISTRADO DENTRO DE NUESTRA BASE DE
                    DATOS COMO CORREO/CONTACTO CORPORATIVO (DATO PÚBLICO), POR LO TANTO,
                    SI NO DESEA SEGUIR RECIBIENDO INFORMACIÓN DE NUESTRA EMPRESA, LE
                    AGRADECEMOS NOS INFORME AL RESPECTO. El contenido de este mensaje de
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
          
          `,
        },
        (error, info) => {
          if (error) {
            console.log(error);
            res.json({
              error,
            });
          } else {
            res.json({
              info,
            });
          }
        }
      );
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendMail,
};
