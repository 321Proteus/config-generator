# **config-generator**

Config Generator is a simple utility to create C++ config files using HTML.
The type field may contain `string`, `number` or `enum`.

The config template is located in `config.js` with the following scheme:

"SETTING_NAME": {
        "type": "string",
        "value": "test"   
    },
```
where the `value` parameter is the default value showing at startup.
When adding a number setting, quotes are not required:

"SETTING_NAME": {
        "type": "number",
        "value": 123   
    },
```

With `enum` set, the administrator can set a list of possible values: 

```json
"SETTING_NAME": {
        "type": "enum",
        "values": [ "opt_1", "opt_2", "opt_3" ],
        "value": "opt_1"        
    },
```


The creator page is built automatically based on the config sceheme.
