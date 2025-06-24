# �� SmartLandlord - AI Landlord Assistant Platform

An AI-powered landlord assistant platform specifically designed for small landlords in Arkansas and surrounding areas. Helps landlords manage 1-10 properties more efficiently and compliantly, avoiding the chaos, complexity, and errors common in traditional management.

## 🎯 Project Features

- **🏠 Property Management** - Visual management of property information
- **👤 Tenant Management** - Tenant information and contract management
- **💰 Rent Collection** - Rent collection and overdue reminders
- **🛠 Repair Requests** - Maintenance request processing
- **📄 Document Generation** - AI-powered document creation
- **⏰ Smart Reminders** - Important notifications and reminders

## 🚀 Tech Stack

- **Frontend**: React 19.1.0 + Vite 6.3.5
- **Routing**: React Router DOM 7.6.2
- **Backend**: Supabase (Authentication + Database + Storage)
- **AI Integration**: OpenAI API (Document generation)
- **Styling**: Native CSS (Responsive design)
- **Deployment**: Vercel (Frontend) + GitHub (Version control)

## 📦 Project Structure

```
landlord-assistant/
├── src/
│   ├── pages/           # Page components
│   │   ├── Login.jsx    # Login page
│   │   ├── Dashboard.jsx # Main dashboard
│   │   ├── PropertiesPage.jsx # Property management
│   │   ├── TenantsPage.jsx # Tenant management
│   │   ├── RentPage.jsx # Rent collection
│   │   ├── RepairPage.jsx # Repair requests
│   │   ├── DocumentsPage.jsx # Document generation
│   │   └── RemindersPage.jsx # Smart reminders
│   ├── lib/             # Utilities
│   │   └── supabaseClient.js # Supabase configuration
│   ├── api/             # API interfaces
│   │   └── openai.js    # OpenAI integration
│   ├── components/      # Reusable components (to be developed)
│   ├── features/        # Feature modules (to be developed)
│   ├── layouts/         # Page layouts (to be developed)
│   └── assets/          # Static assets
├── public/              # Public files
└── package.json         # Project configuration
```

## 🛠 Development Environment Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- OpenAI API key

### Installation Steps

1. **Clone the project**

```bash
git clone <repository-url>
cd landlord-assistant
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment variables configuration**
   Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_OPENAI_API_KEY=your_openai_api_key
```

4. **Start development server**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

## 📋 Development Progress

### ✅ Completed

- [x] Project foundation architecture
- [x] User authentication system (Login/Registration)
- [x] Main dashboard interface
- [x] Routing system configuration
- [x] All module page skeletons
- [x] Responsive UI design
- [x] OpenAI API integration

### 🚧 In Progress

- [ ] Property management functionality implementation
- [ ] Tenant management functionality implementation
- [ ] Database table structure design

### 📅 To Be Developed

- [ ] Rent collection reminder functionality
- [ ] Repair request functionality
- [ ] AI document generation functionality
- [ ] Smart reminder system
- [ ] Financial report export
- [ ] Mobile optimization

## 🎨 Design Philosophy

- **Simple and Easy to Use**: Card-based grid main page, all functions displayed on one screen
- **Responsive Design**: Perfect adaptation for desktop and mobile
- **Modern UI**: Clean color scheme and smooth interaction animations
- **User-Friendly**: Intuitive interface designed specifically for small landlords

## 🔧 Development Standards

- Use native CSS for styling development
- Component-based development for code reusability
- Follow React Hooks best practices
- Responsive design first

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing Guidelines

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 📞 Contact Us

For questions or suggestions, please contact us through:

- Project Issues: [GitHub Issues](https://github.com/your-repo/issues)
- Email: your-email@example.com

---

**SmartLandlord** - Making landlord management simpler, making investments more efficient 🏠✨
