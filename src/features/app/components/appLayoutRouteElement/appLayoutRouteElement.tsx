import React, { FC, memo, useState } from 'react'
import { AppHeader } from 'features/app/components/appHeader/appHeader'
import { WalletModal } from '../../../../components/walletModal/walletModal'
import { useAppLayoutRouteElement } from './useAppLayoutRouteElement'
import { Outlet } from 'react-router-dom'
import { Layout, Menu, Modal } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
const { Header, Sider, Content } = Layout

export const AppLayoutRouteElement: FC = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const { isOpenSelectWalletModal, handleCancel } = useAppLayoutRouteElement()
  return (
    <Layout className="!min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-8 m-4 bg-slate-600" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="!px-4 !bg-white flex items-center justify-between">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <AppHeader />
        </Header>
        <Content className="!bg-white !mx-4 !my-6 !p-6">
          <Outlet />
        </Content>
      </Layout>

      <Modal
        title="Select wallet"
        open={isOpenSelectWalletModal}
        onCancel={handleCancel}
        footer={null}
      >
        <WalletModal />
      </Modal>
    </Layout>
  )
})
