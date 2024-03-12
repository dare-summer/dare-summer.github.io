// Global app variable
window.conference = {};

// Bootstrap (Style Framework)
{% include js/jquery-3.5.1.min.js %}
{% include js/popper.min.js %}
{% include js/bootstrap.js %}

{% include js/moment-with-locales.min.js %}
{% include js/jquery.touchSwipe.min.js %}
{% include js/jquery-calendar.js %}


// FontAwesome (Icons)
//   Imported via CSS and webfonts

// Program
{% include js/conference-program.js %}

// Leaflet (Map Display)
{% include partials/get_enable_map.html %}
{% if enable_map %}
    {% include js/leaflet.js %}
    {% include js/leaflet-easybutton.js %}
    {% include js/leaflet-locatecontrol.js %}
    {% include js/leaflet-providers.js %}

    {% include js/conference-map.js %}
{% endif %}

// Modals ("Popups")
{% include js/conference-modal.js %}

// Live and Streaming
{% if site.conference.live %}
    {% include js/conference-live.js %}
{% endif %}

{% include js/program.js %}
