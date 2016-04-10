<?php
return array(
    //'配置项'=>'配置值'
    'DEFAULT_FILTER'   =>  'strip_tags,trim',
    'LOG_RECORD' => true,
    'LANG_SWITCH_ON' => true,
    'LANG_AUTO_DETECT' => true,
    'DEFAULT_LANG'      =>'en-us',
    'LANG_LIST'        => 'zh-cn,en-us',
    'VAR_LANGUAGE'     => 'l',

    'LOG_EXCEPTION_RECORD' => true,
    'LOG_LEVEL'  => 'EMERG,ALERT,CRIT,ERR,WARN,NOTIC,INFO,DEBUG,SQL',
    'HOME_PAGE' => '/wedding/main',
    'STATIC_PATH' => '/Public/'. strtolower(MODULE_NAME). '/dev/',
    'ACTION_SUFFIX' => 'Action',


    // database
    'DB_TYPE'   => 'mysql',
    'DB_HOST'   => 'qdm217211248.my3w.com',
    'DB_NAME'   => 'qdm217211248_db',
    'DB_USER'   => 'qdm217211248',
    'DB_PWD'    => 'ren20101613',
    'DB_PORT'   => 3306,
);

