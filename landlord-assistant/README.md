# 🏠 SmartLandlord - AI 房东助手平台

专为美国阿肯色州及周边地区中小房东量身定制的 AI 房东助手平台。帮助房东更高效、合规地管理 1–10 套房产，避免传统管理中常见的混乱、繁琐与出错。

## 🎯 项目特色

- **🏠 房源管理** - 可视化管理房产信息
- **👤 租户管理** - 租户信息与合同管理
- **💰 收租提醒** - 租金收取与逾期提醒
- **🛠 报修通道** - 维修请求处理
- **📄 文书导出** - AI 生成各类文书
- **⏰ 智能提醒中心** - 重要事项提醒

## 🚀 技术栈

- **前端**: React 19.1.0 + Vite 6.3.5
- **路由**: React Router DOM 7.6.2
- **后端**: Supabase (认证 + 数据库 + 存储)
- **AI 集成**: OpenAI API (合同生成)
- **样式**: 原生 CSS (响应式设计)
- **部署**: Vercel (前端) + GitHub (版本控制)

## 📦 项目结构

```
landlord-assistant/
├── src/
│   ├── pages/           # 页面组件
│   │   ├── Login.jsx    # 登录页面
│   │   ├── Dashboard.jsx # 主仪表板
│   │   ├── PropertiesPage.jsx # 房源管理
│   │   ├── TenantsPage.jsx # 租户管理
│   │   ├── RentPage.jsx # 收租提醒
│   │   ├── RepairPage.jsx # 报修通道
│   │   ├── DocumentsPage.jsx # 文书导出
│   │   └── RemindersPage.jsx # 智能提醒
│   ├── lib/             # 工具库
│   │   └── supabaseClient.js # Supabase 配置
│   ├── api/             # API 接口
│   │   └── openai.js    # OpenAI 集成
│   ├── components/      # 可复用组件 (待开发)
│   ├── features/        # 功能模块 (待开发)
│   ├── layouts/         # 页面布局 (待开发)
│   └── assets/          # 静态资源
├── public/              # 公共文件
└── package.json         # 项目配置
```

## 🛠 开发环境设置

### 前置要求

- Node.js 18+
- npm 或 yarn
- Supabase 账户
- OpenAI API 密钥

### 安装步骤

1. **克隆项目**

```bash
git clone <repository-url>
cd landlord-assistant
```

2. **安装依赖**

```bash
npm install
```

3. **环境变量配置**
   创建 `.env` 文件：

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_OPENAI_API_KEY=your_openai_api_key
```

4. **启动开发服务器**

```bash
npm run dev
```

5. **构建生产版本**

```bash
npm run build
```

## 📋 开发进度

### ✅ 已完成

- [x] 项目基础架构搭建
- [x] 用户认证系统 (登录/注册)
- [x] 主仪表板界面
- [x] 路由系统配置
- [x] 所有模块页面骨架
- [x] 响应式 UI 设计
- [x] OpenAI API 集成

### 🚧 进行中

- [ ] 房源管理功能实现
- [ ] 租户管理功能实现
- [ ] 数据库表结构设计

### 📅 待开发

- [ ] 收租提醒功能
- [ ] 报修通道功能
- [ ] AI 文书生成功能
- [ ] 智能提醒系统
- [ ] 财务报表导出
- [ ] 移动端优化

## 🎨 设计理念

- **简洁易用**: 卡片网格式主页面，一屏展示所有功能
- **响应式设计**: 完美适配桌面端和移动端
- **现代化 UI**: 清爽的配色方案和流畅的交互动画
- **用户友好**: 专为中小房东设计的直观界面

## 🔧 开发规范

- 使用原生 CSS 进行样式开发
- 组件化开发，提高代码复用性
- 遵循 React Hooks 最佳实践
- 响应式设计优先

## 📱 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

如有问题或建议，请通过以下方式联系：

- 项目 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 邮箱: your-email@example.com

---

**SmartLandlord** - 让房东管理更简单，让投资更高效 🏠✨
