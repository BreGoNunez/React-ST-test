export const config={
    alignment: 'center',  // alignment of buttons (left, center, right)
    color: 'white',      // set the color of buttons (social, white)
    enabled: true,        // show/hide buttons (true, false)
    font_size: 16,        // font size for the buttons
    labels: 'counts',        // button labels (cta, counts, null)
    language: 'en',       // which language to use (see LANGUAGES)
    networks: [           // which networks to include (see SHARING NETWORKS)
      'flipboard',
      'linkedin',
      'snapchat',
      'facebook',
      'twitter',
      'whatsapp'
    ],
    padding: 12,          // padding within buttons (INTEGER)
    radius: 4,            // the corner radius on each button (INTEGER)
    show_total: true,
    size: 40,             // the size of each button (INTEGER)

    // OPTIONAL PARAMETERS
    url: 'https://st-support.github.io/ShareThisTest/', // (defaults to current url)
    image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
    description: 'custom text',       // (defaults to og:description or twitter:description)
    title: 'custom title',            // (defaults to og:title or twitter:title)
    message: 'custom email text',     // (only for email sharing)
    subject: 'custom email subject',  // (only for email sharing)
    username: 'custom twitter handle' // (only for twitter sharing)
  }
