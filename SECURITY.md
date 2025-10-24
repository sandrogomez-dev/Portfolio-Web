# Security Policy

## Supported Versions

Currently supported versions of this portfolio project:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please follow these steps:

### 1. **DO NOT** Create a Public Issue
Please do not create a public GitHub issue for security vulnerabilities.

### 2. Report Privately
Send an email to: **sandrodevx@gmail.com** with:

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if any)

### 3. Response Time
- Initial response: within 48 hours
- Status update: within 7 days
- Fix timeline: depends on severity

### 4. Disclosure Policy
- We will acknowledge your email within 48 hours
- We will confirm the vulnerability and determine its impact
- We will release a fix as soon as possible
- We will credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices

This project follows these security practices:

### Dependencies
- Regular updates of dependencies
- Using `npm audit` to check for vulnerabilities
- Monitoring security advisories

### Code
- No sensitive data in repository
- Environment variables for configuration
- Input validation and sanitization
- HTTPS only in production
- Secure headers configuration

### Build & Deploy
- Automated builds with security checks
- Content Security Policy (CSP) headers
- CORS configuration
- Regular security audits

## Known Security Considerations

### Client-Side Application
This is a client-side portfolio application. Be aware:
- All client-side code is visible to users
- Never include API keys or secrets in the codebase
- Use environment variables for any sensitive configuration
- Validate all user inputs (contact form, etc.)

### Third-Party Dependencies
This project uses several third-party libraries. We:
- Regularly update dependencies
- Monitor security advisories
- Review dependencies before adding them

## Security Checklist for Contributors

Before submitting a PR, please ensure:

- [ ] No hardcoded credentials or API keys
- [ ] No sensitive data in commits
- [ ] Dependencies are up to date
- [ ] No known vulnerabilities (`npm audit`)
- [ ] Input validation is implemented
- [ ] XSS vulnerabilities are prevented
- [ ] External links use `rel="noopener noreferrer"`

## Contact

For any security concerns, contact:
- **Email**: sandrodevx@gmail.com
- **LinkedIn**: [linkedin.com/in/sandro-gomez-21355b346](https://www.linkedin.com/in/sandro-gomez-21355b346/)

## Bug Bounty Program

Currently, this project does not have a bug bounty program, but we deeply appreciate responsible disclosure of security issues.

---

Thank you for helping keep this project secure! 🔒

