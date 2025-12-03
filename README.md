# Desenvolvimento:

- Instalar as dependẽncias:
```
npm install
```
- Caso necessário alterar o endpoint no arquivo: src/sevices/api.tsx

``` js
import axios from "axios";

const API = axios.create({
  baseURL: "http:127.0.0.1:8000/api/",
  timeout: 10000,
});
export default API;

```

- Iniciar o projeto:
```
npx expo start
```
**Obs:** É recomendao que possua o aplicativo expo go, ou possua uma vm.


# Produção

**Obs:** É preciso uma conta EXPO, link: "https://expo.dev ".

- Instalar o eas-cli:
```
npm install -g eas-cli
```

- Realizar o login
```
eas login
```

- Gerar o arquivo de configuração com o comando:
```
eas build:configure
```

```js
{
  "cli": {
    "version": ">= 16.28.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "distribution": "internal",
      "android": { "buildType": "apk" }
    },
    "preview": {
      "distribution": "internal",
      "android": { "buildType": "apk" }
    },
    "production": {
      "android": { "buildType": "app-bundle" },
      "ios": {}
    }
  },
  "submit": {
    "production": {}
  }
}

```

- Gerar o APK:
```
npm run apk

```
- Gerar o app-bundle(AAB):
```
npm run android_bundle
```

