# gitbook-plugin-password-z

Password Plugin for Gitbook

Add the plugin to your `book.json`:

```
{
	"plugins" : [ "password-z" ]
}
```

Set a global password:

```
{
  "plugins" : [ "password-z" ]
  "pluginsConfig":{
    "password": {
      "global": "123456"
    }
  }
}
```


Set a separate password for each page:

```
{
  "plugins" : [ "password-z" ]
  "pluginsConfig":{
    "password": {
      "README.md": "123456",
      "README.md": "123456",
      "README.md": "123456"
    }
  }
}
