import { Typography,Space } from 'antd';
import {BorderBottomOutlined,ApartmentOutlined,DownOutlined,CloseOutlined} from '@ant-design/icons';
import React from 'react';

function AppHeader(){
    return (
        <div classname="AppHeader">
            <Space>
            <Typography.Title level={4} style={{margin:0,borderRight:"1px solid #a0aca0"}} >
            <BorderBottomOutlined style={{fontSize:24}} /> &nbsp;&nbsp;OmniStudio&nbsp;&nbsp;
            </Typography.Title>
            <Typography.Title level={5} style={{margin:0,borderRight:"1px solid #a0aca0",color:"#475247"}} >
            OmniScripts &nbsp;&nbsp; <DownOutlined style={{fontSize:10}}/>&nbsp;&nbsp;
            </Typography.Title>
            <Typography.Title level={5} style={{margin:0,borderRight:"1px solid #a0aca0",color:"#a0aca0"}} >
            <ApartmentOutlined />Bulk Enrollment &nbsp;&nbsp; <DownOutlined style={{fontSize:10}}/>&nbsp;&nbsp;<CloseOutlined style={{fontSize:10}}/>
            </Typography.Title>
            <Typography.Title level={5} style={{margin:0,borderRight:"1px solid #a0aca0",color:"#a0aca0"}} >
            <ApartmentOutlined />InblitzCreateUpdate &nbsp;&nbsp; <DownOutlined style={{fontSize:10}}/>&nbsp;&nbsp;<CloseOutlined style={{fontSize:10}}/>
            </Typography.Title>
            <Typography.Title level={5} style={{margin:0,borderRight:"1px solid #a0aca0",color:"#a0aca0"}} >
            <ApartmentOutlined />Bulk Enrollment &nbsp;&nbsp; <DownOutlined style={{fontSize:10}}/>&nbsp;&nbsp;<CloseOutlined style={{fontSize:10}}/>
            </Typography.Title>
            <Typography.Title level={5} style={{margin:0,borderRight:"1px solid #a0aca0",color:"#a0aca0"}} >
            <ApartmentOutlined />Bulk Enrollment &nbsp;&nbsp; <DownOutlined style={{fontSize:10}}/>&nbsp;&nbsp;<CloseOutlined style={{fontSize:10}}/>
            </Typography.Title>
            <Typography.Title level={5} style={{margin:0,borderRight:"1px solid #a0aca0",color:"#a0aca0",borderTop:"2px solid blue",backgroundColor:"#ccd9ff"}} >
            <ApartmentOutlined />Recently viewed &nbsp;&nbsp; <DownOutlined style={{fontSize:10}}/>&nbsp;&nbsp;<CloseOutlined style={{fontSize:10}}/>
            </Typography.Title>
            </Space>
            
        </div>
    );
}

export default AppHeader;