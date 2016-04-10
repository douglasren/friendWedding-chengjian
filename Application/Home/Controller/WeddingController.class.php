<?php
namespace Home\Controller;
use Home\Library\BaseUtil;
use Home\Library\Encode;
use Think\Controller;

class WeddingController extends Controller {
    public function indexAction(){
        $this->display('wedding');
    }

    public function mainAction() {
        $left_days = BaseUtil::getLeftDay();
        \Think\Log::record('main: data:' . json_encode(BaseUtil::getBlessingData(5)));
        $this->assign('left_days', $left_days);
        $this->assign('datalist', BaseUtil::getBlessingData(-1));
        $this->assign('total', BaseUtil::getBlessingNum());
        $this->display('wedding');
    }

    public function submitAction() {

        $name = trim(I('name'));
        $phone = trim(I('phone'));
        $num = intval(I('num'));
        $content = trim(I('content'));

        $data = array();
        $data['name'] = $name;
        $data['phone'] = $phone;
        $data['trunout'] = $num;
        $data['blessing'] = $content;
        $data['time'] = time();

        $res = array();
        $res['ret'] = Encode::OK;
        $res['msg'] = 'OK';

        $flag = M('wedding')->add($data);
        if (!$flag) {
            $res['ret'] = Encode::ServerError;
            $res['msg'] = 'save data fail';
        }
        $this->ajaxReturn($res);
    }

    public function getMoreDataAction() {

        $data = BaseUtil::getBlessingData(-1);
        $this->ajaxReturn($data);
    }

    public function detailAction() {

        $this->assign('datalist', BaseUtil::getBlessingData(-1));
        $this->assign('total', BaseUtil::getBlessingNum());
        $this->display('detail');
    }
}