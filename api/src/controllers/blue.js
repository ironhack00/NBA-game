const bleno = require('bleno');
const readline = require('readline');

function scanAndConnectBluetoothDevice(deviceName, callback) {
  // Crea una interfaz de lectura de línea para recibir la entrada del usuario
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Crea un objeto Bluetooth con la configuración y el comportamiento necesarios
  const bluetooth = bleno;

  // Implementa las funciones de retorno de llamada para los eventos del objeto Bluetooth
  bluetooth.on('stateChange', (state) => {
    console.log('Estado Bluetooth:', state);

    if (state === 'poweredOn') {
      // El adaptador Bluetooth está encendido y listo para su uso
      // Escanea los dispositivos Bluetooth cercanos
      bluetooth.startAdvertising(deviceName, [bleno.PrimaryService.uuid]);
      console.log('Escaneando dispositivos...');
    } else {
      // Detén el anuncio si el adaptador Bluetooth no está encendido
      bluetooth.stopAdvertising();
      console.log('Detenido el anuncio Bluetooth.');
    }
  });

  bluetooth.on('advertisingStart', (error) => {
    console.log('Advertencia Bluetooth iniciada.');

    if (!error) {
      // El anuncio Bluetooth ha comenzado con éxito
      // Busca y muestra los dispositivos encontrados
      bluetooth.startAdvertising(deviceName, [bleno.PrimaryService.uuid]);
      console.log('Escaneando dispositivos...');
    } else {
      console.error('Error al iniciar el anuncio Bluetooth:', error);
    }
  });

  bluetooth.on('advertisingStop', () => {
    console.log('Advertencia Bluetooth detenida.');
  });

  bluetooth.on('accept', (clientAddress) => {
    console.log('Conexión aceptada desde:', clientAddress);
  });

  bluetooth.on('disconnect', (clientAddress) => {
    console.log('Desconexión del cliente:', clientAddress);
  });

  // Solicita al usuario que ingrese el dispositivo Bluetooth al que desea conectarse
  rl.question('Ingrese el nombre o dirección del dispositivo Bluetooth: ', (answer) => {
    // Intenta conectarse al dispositivo ingresado por el usuario
    bluetooth.startAdvertising(deviceName, [bleno.PrimaryService.uuid]);
    console.log('Conectando al dispositivo:', answer);
    // Aquí puedes implementar la lógica para conectarte al dispositivo seleccionado

    rl.close();
  });

  // Llama al callback con el resultado cuando se complete la operación
  callback(null, 'Escaneo y conexión de dispositivos Bluetooth iniciados.');
}

module.exports = {scanAndConnectBluetoothDevice};