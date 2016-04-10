<?php

/**
 * Created by PhpStorm.
 * User: teddy
 * Date: 11/24/15
 * Time: 1:45 PM
 */

namespace Home\Library;

class BaseUtil {


    static public function getLeftDay() {

        $dst_date = strtotime('2015-12-07');
        $now_date = time();
        $del_days = ceil(($dst_date - $now_date) / 3600 / 24);
        return $del_days;
    }

    static public function getBlessingData($num) {
        if (-1 == $num) {
            $num = 10000;
        }

        $datalist = M('wedding')->limit($num)->order('time desc')->select();

        foreach($datalist as &$item) {
            $item['time'] = date('Y-m-d H:i:s', $item['time']);
        }

        return $datalist;
    }


    static public function getBlessingNum() {
        $num = M('wedding')->Count('id');
        return $num;
    }


    
}