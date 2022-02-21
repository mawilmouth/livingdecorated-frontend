import env from '../../constants/env';

interface EventArgs {
  action: string;
  category?: string;
  label?: string;
  value?: any;
}

class Gtag {
  constructor (trackingId: string) {
    this.trackingId = trackingId;
  }

  trackingId: string;

  pageview (url: string): void {
    // @ts-ignore
    window.gtag('config', this.trackingId, { page_path: url });
  }

  event ({ action, category, label, value }: EventArgs): void {
    // @ts-ignore
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

export default new Gtag(env.gaId);
