---
layout: home
---

{%- for speaker in site.speakers -%}
    <div class="row-md">
        <div class="media">
            <img class="mr-3" src="{{ site.baseurl }}/assets/images/{{ speaker.last_name }}.jpeg" width="100px"
                alt="Generic placeholder image">
            <div class="media-body">
                <p p class="media-heading mt-0 mb-0 text-info font-weight-bold"> {{ speaker.title }} {{ speaker.name }} </p>
                <p class="media-heading mt-0 mb-0"> {{ speaker.affiliation }} </p>
                <p class="media-heading mt-0 mb-0 text-muted small lead"> {{ speaker.country }} </p>
            </div>
        </div>
        <blockquote>
            <p class="text-muted small font-weight-light"> {{ speaker.bio }} </p>
        </blockquote>
    </div>
{%- endfor -%}


