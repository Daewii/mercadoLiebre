# CON-TEO-GENCIAS

Esta aplicación gestiona contingencias y procesos de producción y staging.

## Requisitos Previos

### Para Usuarios de Linux:

Instala los siguientes elementos:

1. [PHP](https://www.digitalocean.com/community/tutorials/how-to-install-php-8-1-and-set-up-a-local-development-environment-on-ubuntu-22-04)
2. [Node.js](https://nodejs.org/)
3. [Magento Cloud](https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/dev-tools/cloud-cli/cloud-cli-overview.html?lang=en)

### Para Usuarios de Windows:

Instala los siguientes elementos:

1. [Node.js](https://nodejs.org/)
2. [Ubuntu](https://apps.microsoft.com/detail/ubuntu-22-04-2-lts/9PN20MSR04DW?hl=en-US&gl=US)

   Además, instala dentro de Ubuntu:

   2.1. [Instalar PHP](https://www.digitalocean.com/community/tutorials/how-to-install-php-8-1-and-set-up-a-local-development-environment-on-ubuntu-22-04)

   2.2. [Instalar Magento Cloud](https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/dev-tools/cloud-cli/cloud-cli-overview.html?lang=en)

## Instrucciones de Uso

### Antes de Iniciar el Programa

1. Inicia sesión en Magento Cloud.
2. Abre el túnel apuntando a la base de datos, ya sea en producción o staging.

### Instrucciones para ejecutar el programa

1. **Instalación de dependencias:**
   - Ejecute el siguiente comando para instalar las dependencias: `npm install`

2. **Opción 1: Ejecutar desde la terminal:**
   - Ejecute el comando: `node index.js`

3. **Opción 2: Crear ejecutable con pkg:**
   - Ejecute el siguiente comando en la terminal:
      - Para crear el ejecutable para todos los sistemas (Windows, Linux y macOS), ejecute: `pkg index.js`
      - Si desea especificar su sistema operativo, utilice la opción "-t". Para obtener más información, ejecute: `pkg -h`
      - Ejecute el archivo creado después de la generación del ejecutable.

### Escenarios

1. **Liberación de SKUs:**
   - Ingresa el nombre del archivo con extensión CSV que contenga una sola columna con los "SKUs" de los productos.

2. **Cambio de Estados:**
   - Ingresa el nombre del archivo con extensión CSV que contenga dos columnas separadas por una coma (","), donde la primera sea el "INCREMENT_ID" de la orden y la segunda sea el nuevo estado.

3. **Cancelaciones:**
   - Ingresa el nombre del archivo con extensión CSV que contenga una sola columna con los "INCREMENT_ID" de las órdenes.

4. **Credit Memo/Refund:**
   - Ingresa el nombre del archivo con extensión CSV que contenga una sola columna con los "INCREMENT_ID" de las órdenes.

5. **Servicios de Tracking:**
   - 5.1. **Consumir Servicios de Tracking:**
      - Despliega una lista con los transportistas registrados y permite seleccionar uno para su consumo.

   - 5.2. **Actualizar Track Numbers:**
      - Ingresa el nombre del archivo con extensión CSV que contenga dos columnas separadas por una coma (","), donde la primera sea el "INCREMENT_ID" de la orden y la segunda sea el track number.

   - 5.3. **Agregar Transportista:**
      - Ingresa el nombre del transportista, el "client ID", y finalmente, el "client secret" para permitir el consumo.

   - 5.4. **Listar Transportistas:**
      - Despliega una lista con los transportistas registrados.

   - 5.5. **Eliminar Transportista:**
      - Despliega una lista que permite eliminar el transportista seleccionado.
