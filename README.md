# gitbook-plugin-password-z

Password Plugin for Gitbook

Add the plugin to your `book.json`:

```
{
    "plugins" : [ "password-z" ]
}
```

Set a global password:

```json
{
  "plugins" : [ "password-z" ]
  "pluginsConfig":{
    "password": {
      "model":"global",
      "settings": {
        "password": "123456",
        "bg-img", "...",
      }
    }
  }
}
```

Set a separate password for each page:

```json
{
  "plugins" : [ "password-z" ]
  "pluginsConfig":{
    "password": {
      "model":"global",
      "settings": {
          "<file name>": {
            "password": "123456",
            "bg-img", "...",
          },
          ...
      }
    }
  }
}
```
