// import React from "react";
import {Card,Table,Typography,Space,Button,Input} from 'antd';
import {CaretDownOutlined, DownSquareOutlined,TagOutlined,SearchOutlined,CalendarOutlined,SettingOutlined,ReloadOutlined,PieChartOutlined,EditOutlined,FilterOutlined } from '@ant-design/icons';
function AppContent(){
    const dataSource = [
        {
          key: '1',
          QuoteName: 'Multi Auto',
          OpportunityName : 'Opp_1',
          Syncing: '',
          
          ExpirationDate:'',
          Subtotal:'$0.00',
          TotalPrice:'$0.00',
          icon:'',
        },
        {
            key: '2',
            QuoteName: 'Multi Auto',
            OpportunityName : 'Opp_1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$0.00',
            TotalPrice:'$0.00',
            icon:'',
        },
        {
            key: '3',
            QuoteName: 'Multi Auto',
            OpportunityName : 'Opp_1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$0.00',
            TotalPrice:'$0.00',
            icon:'',
        },
        {
            key: '4',
            QuoteName: 'Multi Auto',
            OpportunityName : 'RRF_testOpp1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$7560.00',
            TotalPrice:'$7560.00',
            icon:'',
        },
        {
            key: '5',
            QuoteName: 'Multi Auto',
            OpportunityName : 'RRF_testOpp1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$37804.00',
            TotalPrice:'$37804.00',
            icon:'',
        },
        {
            key: '6',
            QuoteName: 'Multi Auto',
            OpportunityName : 'RRF_testOpp1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$37804.00',
            TotalPrice:'$37804.00',
            icon:'',
        },
        {
            key: '7',
            QuoteName: 'Multi Auto',
            OpportunityName : 'RRF_testOpp1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$37804.00',
            TotalPrice:'$37804.00',
            icon:'',
        },
        {
            key: '8',
            QuoteName: 'Multi Auto',
            OpportunityName : 'RRF_testOpp1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$37804.00',
            TotalPrice:'$37804.00',
            icon:'',
        },
        {
            key: '9',
            QuoteName: 'Multi Auto',
            OpportunityName : 'RRF_testOpp1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$37804.00',
            TotalPrice:'$37804.00',
            icon:'',
        },
        {
            key: '10',
            QuoteName: 'Multi Auto',
            OpportunityName : 'RRF_testOpp1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$37804.00',
            TotalPrice:'$37804.00',
            icon:'',
        },
        {
            key: '11',
            QuoteName: 'Multi Auto',
            OpportunityName : 'RRF_testOpp1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$0.00',
            TotalPrice:'$0.00',
            icon:'',
        },
        {
            key: '12',
            QuoteName: 'Multi Auto',
            OpportunityName : 'Opp_1',
            Syncing: '',
            
            ExpirationDate:'',
            Subtotal:'$0.00',
            TotalPrice:'$0.00',
            icon:'',
        },

      ];
      
      const columns = [
        {
            title: ' ',
            dataIndex: 'key',
            key: '',
          },
        {
          title: 'QuoteName',
          dataIndex: 'QuoteName',
          // eslint-disable-next-line
          render:(text)=><a>{text}</a>,
          key: 'QuoteName',
        },
        {
          title: 'OpportunityName',
          dataIndex: 'OpportunityName',
          // eslint-disable-next-line
          render:(text)=><a>{text}</a>,
          key: 'OpportunityName',
        },
        {
          title: 'Syncing',
          dataIndex: 'Syncing',
          render:()=><input type="checkbox"/>,
          key: 'Syncing',
        },
        {
            title: 'ExpirationDate',
            dataIndex: 'ExpirationDate',
            key: 'ExpirationDate',
          },
          {
            title: 'Subtotal',
            dataIndex: 'Subtotal',
            key: 'Subtotal',
          },
          {
            title: 'TotalPrice',
            dataIndex: 'TotalPrice',
            key: 'TotalPrice',
          },
          {
            title: '',
            dataIndex: 'icon',
            render:()=><DownSquareOutlined />,
            key: '',
          },
      ];
    return (
        <div classname="AppContent">
        <Card  bordered={true} style={{}}>
            <Space style={{margin:0}}>
            <TagOutlined style={{fontSize:30,fontWeight:"bolder"}} />
            <Typography.Title level={4} style={{fontWeight:"bolder",margin:0}}>
            <span style={{fontSize:20,color:"#a0aca0"}}>Quotes</span><br/>Recently viewed <CaretDownOutlined/>
            </Typography.Title>            
            </Space>
            <div className='rand' style={{display:"flex",justifyContent:"space-between"}}>
            <div >
                <Typography.Title level={5} style={{margin:0,color:"#a0aca0"}}>
                50+ items Updated a minute ago
                </Typography.Title>
            </div>
            <div>
            <Space>
            <Input addonBefore={<SearchOutlined/>} placeholder="Seach this list....." />
            <Button icon={<SettingOutlined />}></Button>
            <Button icon={<CalendarOutlined />}></Button>
            <Button icon={<ReloadOutlined />}></Button>
            <Button icon={<EditOutlined />}></Button>
            <Button icon={<PieChartOutlined style={{color:"#a0aca0"}}/>}></Button>
            <Button icon={<FilterOutlined style={{color:"#a0aca0"}}/>}></Button>
            </Space>
            </div>
            </div>

            <Table columns={columns} dataSource={dataSource} />
        </Card>
        </div>
    );
}

export default AppContent;