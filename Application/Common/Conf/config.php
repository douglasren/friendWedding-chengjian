<?php
return array(
	//'配置项'=>'配置值'

    'URL_CASE_INSENSITIVE'  =>  false,
    'MULTI_MODULE' => false,
    //'SHOW_PAGE_TRACE' => isset($_GET['debug']) ?: false,
    'SHOW_PAGE_TRACE' => false,
    'SESSION_AUTO_START' => true,
    'SHOW_ERROR_MSG'        =>  false,
    'DATA_CACHE_TIME' => 7200,
    'MODULE_ALLOW_LIST' => array('Home','Admin','Api'),
    'DEFAULT_MODULE' => 'Home',
    'ERROR_MESSAGE' => 'Page Error! Please try again later~',
//    'TMPL_EXCEPTION_FILE' => TMPL_PATH . '/TPL/exception.tpl',
    'DEFAULT_LANG' =>'en-us',
    //'URL_404_REDIRECT' => '',
    'LOAD_EXT_FILE' => 'functions',

    'WEB_URL' => 'http://shumeng.ren/',
);