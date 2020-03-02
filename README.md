# gitbook-plugin-password

Password Plugin for Gitbook

Add the plugin to your `book.json`:

```
{
	"plugins" : [ "password" ]
}		
```

Set a global password:

```
{
  "plugins" : [ "password" ]
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
  "plugins" : [ "password" ]
  "pluginsConfig":{
    "password": {
      "README.md": "123456",
      "README.md": "123456",
      "README.md": "123456"
    }
  }
}
