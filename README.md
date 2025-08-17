# Form Validation Project

A comprehensive front-end form validation project built with HTML5, CSS3 (Bootstrap 5), and vanilla JavaScript. Features real-time validation, accessibility support, and responsive design.

---

## 🚀 Features

- **Complete Form Validation**: Full Name, Email, Phone, Password, and Confirm Password
- **Real-time Validation**: Validates fields on both `onChange` and `onSubmit` events
- **Accessibility**: ARIA labels, proper focus management, and screen reader support
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Password Security**: Strong validation rules and visibility toggle
- **Clean Architecture**: Modular JavaScript with clear separation of concerns

---

## 📋 Validation Rules

### Full Name
- **Required field**
- Minimum 5 characters
- Only letters and spaces allowed

### Email Address
- **Required field**
- Must contain "@" symbol
- Valid email format (name@domain.ext)

### Phone Number
- **Required field**
- Exactly 10 digits
- Cannot be "1234567890"
- Numbers only

### Password
- **Required field**
- Minimum 8 characters
- Cannot be "password" (case-insensitive)
- Cannot match the user's full name
- Must be different from confirm password

### Confirm Password
- **Required field**
- Must exactly match the password field

---

## 🛠️ Project Structure

```
form-validation-project/
├── index.html                 # Main HTML file
├── styles.css                 # Custom CSS styles
├── script.js                  # JavaScript validation logic
├── README.md                  # Project documentation
└── .gitignore                 # Git ignore file
```
---

## 🔧 Setup and Installation

### Local Development

1. **Clone the repository**
   
   ```
   git clone https://github.com/lokitha-reddy/-Form-Validation-Project-
   cd form-validation-project
   ```

2. **Open in browser**
  
  ```
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using Python HTTP server
   python -m http.server 8000
     
   # Option 3: Using Node.js HTTP server
   npx http-server
   ```

3. **Start developing**
   
   - Edit files in your preferred code editor
   - Refresh browser to see changes
   - Use browser developer tools for debugging

---

## 🌐 Deployment

### GitHub Setup

1. **Create GitHub Repository**
   
   ```
   git init
   git add .
   git commit -m "Initial commit: Form validation project"
   git branch -M main
   git remote add origin https://github.com/lokitha-reddy/Form-Validation-Project-
   git push -u origin main
   ```

### Netlify Deployment

#### Option 1: Drag and Drop

1. Visit [Netlify](https://www.netlify.com/)
2. Drag your project folder to the deployment area
3. Your site will be live instantly

#### Option 2: Git Integration

1. Connect your GitHub account to Netlify
2. Select your repository
3. Configure build settings:
   - **Build command**: (leave empty for static sites)
   - **Publish directory**: `./` (root directory)
4. Click "Deploy site"

#### Option 3: Netlify CLI

```
npm install -g netlify-cli
netlify login
netlify init
netlify deploy
netlify deploy --prod
```

### Other Deployment Options

#### Vercel

```npm install -g vercel
vercel
```

#### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select source branch (usually `main`)
4. Your site will be available at `https://github.com/lokitha-reddy/Form-Validation-Project-`

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] All fields show appropriate error messages when empty
- [ ] Full name validation works with edge cases
- [ ] Email validation catches invalid formats
- [ ] Phone validation accepts only 10-digit numbers
- [ ] Password validation enforces all rules
- [ ] Confirm password matches original password
- [ ] Form submits successfully with valid data
- [ ] Real-time validation works on input change
- [ ] Password visibility toggle functions correctly
- [ ] Form is accessible via keyboard navigation
- [ ] Error messages are announced by screen readers
- [ ] Responsive design works on mobile devices

### Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🎨 Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #0d6efd;
    --success-color: #198754;
    --error-color: #dc3545;
    --warning-color: #fd7e14;
}
```

### Validation Rules
Modify validation functions in `script.js`:
```javascript
function validateFullName(name) {
    // Customize validation logic here
}
```
---

## 🚀 Deployment Checklist

### Pre-deployment
- [ ] Test all form validations
- [ ] Verify responsive design on multiple devices
- [ ] Check accessibility with screen readers
- [ ] Validate HTML and CSS
- [ ] Test in multiple browsers

### GitHub Setup
- [ ] Create GitHub repository
- [ ] Add all project files
- [ ] Create meaningful commit messages
- [ ] Push to main branch

### Netlify Deployment
- [ ] Connect GitHub account to Netlify
- [ ] Configure build settings
- [ ] Deploy and test live site
- [ ] Set up custom domain (optional)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🔗 Live Demo

- **Live Site**: (https://jsformvalidationmajorproject.netlify.app/)
- **GitHub Repository**: (https://github.com/lokitha-reddy/Form-Validation-Project-)

---

## 📞 Support

If you encounter any issues or have questions:

   1. Check the browser console for error messages
   2. Verify all files are properly linked
   3. Ensure you're running the latest version
   4. Open an issue on GitHub for bug reports
   5. Contact me via email: nlokithareddy226@gmail.com
---

**Made with ❤️ using HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript**

