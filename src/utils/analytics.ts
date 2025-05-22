import type { AnalyticsEvent } from '@/types';

// Mock analytics implementation - in production, replace with Google Analytics, Mixpanel, etc.
class AnalyticsService {
  private events: AnalyticsEvent[] = [];
  private isEnabled: boolean = process.env.NODE_ENV === 'production';

  // Track page views
  trackPageView(path: string, title: string): void {
    if (!this.isEnabled) {
      console.log(`📊 Page View: ${title} (${path})`);
      return;
    }

    this.track({
      action: 'page_view',
      category: 'navigation',
      label: title,
      value: 1,
      timestamp: Date.now(),
    });

    // In production, send to your analytics service
    // gtag('config', 'GA_MEASUREMENT_ID', { page_path: path });
  }

  // Track interactions
  trackEvent(
    action: string,
    category: string,
    label?: string,
    value?: number
  ): void {
    if (!this.isEnabled) {
      console.log(`📊 Event: ${action} | ${category} | ${label || ''}`);
      return;
    }

    this.track({
      action,
      category,
      label,
      value,
      timestamp: Date.now(),
    });
  }

  // Track project interactions
  trackProjectView(_projectId: string, projectName: string): void {
    this.trackEvent('project_view', 'projects', projectName);
  }

  trackProjectDemo(_projectId: string, projectName: string): void {
    this.trackEvent('demo_click', 'projects', projectName);
  }

  trackProjectRepo(_projectId: string, projectName: string): void {
    this.trackEvent('repo_click', 'projects', projectName);
  }

  // Track contact form
  trackContactForm(action: 'start' | 'submit' | 'error', details?: string): void {
    this.trackEvent(`contact_form_${action}`, 'contact', details);
  }

  // Track CV download
  trackCVDownload(): void {
    this.trackEvent('cv_download', 'contact', 'resume_pdf');
  }

  // Track skill interactions
  trackSkillHover(skillName: string): void {
    this.trackEvent('skill_hover', 'skills', skillName);
  }

  // Track theme changes
  trackThemeChange(theme: 'light' | 'dark'): void {
    this.trackEvent('theme_change', 'ui', theme);
  }

  // Track recruiter mode toggle
  trackRecruiterMode(enabled: boolean): void {
    this.trackEvent('recruiter_mode', 'ui', enabled ? 'enabled' : 'disabled');
  }

  // Track social link clicks
  trackSocialClick(platform: string): void {
    this.trackEvent('social_click', 'contact', platform);
  }

  // Track salary tooltip view (recruiter feature)
  trackSalaryView(): void {
    this.trackEvent('salary_view', 'recruiter', 'salary_tooltip');
  }

  // Private method to store events
  private track(event: AnalyticsEvent): void {
    this.events.push(event);
    
    // In production, send to analytics service
    // Example: Google Analytics
    // gtag('event', event.action, {
    //   event_category: event.category,
    //   event_label: event.label,
    //   value: event.value,
    // });
  }

  // Get all tracked events (for debugging)
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear events (for testing)
  clearEvents(): void {
    this.events = [];
  }
}

// Export singleton instance
const analytics = new AnalyticsService();

// Export individual functions for easier usage
export const trackPageView = analytics.trackPageView.bind(analytics);
export const trackEvent = analytics.trackEvent.bind(analytics);
export const trackProjectView = analytics.trackProjectView.bind(analytics);
export const trackProjectDemo = analytics.trackProjectDemo.bind(analytics);
export const trackProjectRepo = analytics.trackProjectRepo.bind(analytics);
export const trackContactForm = analytics.trackContactForm.bind(analytics);
export const trackCVDownload = analytics.trackCVDownload.bind(analytics);
export const trackSkillHover = analytics.trackSkillHover.bind(analytics);
export const trackThemeChange = analytics.trackThemeChange.bind(analytics);
export const trackRecruiterMode = analytics.trackRecruiterMode.bind(analytics);
export const trackSocialClick = analytics.trackSocialClick.bind(analytics);
export const trackSalaryView = analytics.trackSalaryView.bind(analytics);

export default analytics; 