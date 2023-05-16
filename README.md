# React Native Goalsetter

## Requisitos
* [OpenJDK](https://openjdk.java.net/)
* [Node](https://nodejs.org/es/)
* [npm](https://www.npmjs.com/)
* [yarn](https://yarnpkg.com/)
* [Android Studio](https://developer.android.com/studio)
* [xCode](https://developer.apple.com/xcode/)
* [CocoaPods](https://cocoapods.org/)

## Instalación

### Descargar el repositorio
Ejecutar en una terminal los siguientes comandos:
``` bash
git clone https://github.com/NicoPalazzesi/react-native-goalsetter.git
cd react-native-goalsetter
```

### Instalar las dependencias
Ejecutar en una terminal
``` bash
yarn install
yarn start
```

### Android
Abrir simulador de Android de su preferencia o dejar que React Native elija uno por defecto.
Puede usar emuladores de Android Studio, Genymotion o cualquiera de su preferencia.


Ejecutar el comando:
``` bash
yarn android
```

### iOS
Abrir simulador de iOS de su preferencia o dejar que React Native elija uno por defecto.


Ejecutar los comandos:
``` bash
cd ios/ && pod install
cd ../
yarn ios
```