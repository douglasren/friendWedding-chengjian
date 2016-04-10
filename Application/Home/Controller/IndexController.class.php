<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function indexAction(){
        redirect(C(HOME_PAGE));
    }
}