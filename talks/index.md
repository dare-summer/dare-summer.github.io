---
layout: home
title: Accepted Papers
---

<h2> {{- page.title -}} <h2>

<hr>  


{% for main_category in site.conference.talks.main_categories %}

<h3 class="mt-4 mb-3">
    <!-- <span class="badge border-soft-{{ main_category.color }} bg-soft-{{ main_category.color }} d-block d-sm-inline text-wrap">
    {{ main_category.name }}
    </span> -->
</h3>

<ul class="list-unstyled">
    {% for talk in site.talks -%}
    {%- for cat in talk.categories -%}
        {%- if cat == main_category.name -%}
        {%- assign main_cat = main_category.name -%}
        <li class="pl-2 mb-3 border-soft-{{ main_category.color }}">
            <p class="mb-0">
            {% include partials/show_talk.html %}
            </p>
            <p class="font-weight-light mb-0">
            {% include partials/list_speakers.html %}
            </p>

            {% if talk.hide -%}
            {%- assign talk_scheduled = false -%}
            {%- for d in site.data.program.days -%}
                {%- include partials/get_day_hash.html -%}
                {%- for r in d.rooms -%}
                {%- assign room = site.rooms | where: 'name', r.name | first -%}
                {%- for t in r.talks -%}
                    {%- if talk.name == t.name -%}
                    <p class="mb-0">

                        {%- if site.conference.live -%}
                        {%- include partials/get_talk_timestamp.html -%}
                        <span class="live-hide" data-start="{{ timestamp_start }}" data-end="{{ timestamp_end }}">
                        {%- endif -%}

                        {%- include partials/get_time_pronoun.html -%}
                        {%- include partials/get_talk_time.html -%}
                        {{- time_pronoun }} {% include partials/show_talk_time.html %}

                        {%- if site.conference.live -%}
                        </span>
                        {%- include partials/show_live_button.html -%}
                        {%- endif %}

                        {{ site.data.lang[site.conference.lang].pronoun.in | default: "in" }} {% include partials/show_room.html -%}
                    </p>

                    {%- assign talk_scheduled = true -%}
                    {%- break -%}
                    {%- endif -%}
                {%- endfor -%}

                {%- if talk_scheduled -%}
                    {%- break -%}
                {%- endif -%}
                {%- endfor -%}

                {%- if talk_scheduled -%}
                {%- break -%}
                {%- endif -%}
            {%- endfor -%}
            {%- endif %}

            <p class="mb-0">
            {%- if site.conference.live and talk.hide != true -%}
                {% for d in site.data.program.days -%}
                {%- for r in d.rooms -%}
                    {%- for t in r.talks -%}
                    {%- if talk.name == t.name -%}
                        {%- assign live_button_styleclass = "mr-1" -%}
                        {%- include partials/show_live_button.html -%}
                    {%- endif -%}
                    {%- endfor -%}
                {%- endfor -%}
                {%- endfor -%}
            {%- endif -%}
            {%- include partials/list_sub_categories.html -%}

            {%- include partials/get_link_types.html -%}
            {%- if has_icon_links and site.conference.talks.hide_icons != true -%}
                {% for link in talk.links -%}
                {%- assign link_styleclass = "badge badge-light text-reset font-weight-normal mr-1" -%}
                {%- include partials/get_link.html -%}
                {%- if link_icon -%}
                    {{- link_tag -}}
                    <i class="fas fa-{{ link_icon }} text-secondary"></i>
                    </a>
                {%- endif -%}
                {%- endfor %}
            {%- endif %}
            </p>

        </li>
        {%- break -%}
        {%- endif -%}
    {%- endfor -%}
    {%- endfor %}
</ul>
{%- endfor -%}

{% for talk in site.talks -%}
<div class="modal fade" id="{{talk.num}}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="dialog">
    <div class="modal-content">
      <div class="modal-header">
        <label class="font-weight-bold mb-0" id="exampleModalLabel">{{talk.name}}</label>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <p class="font-weight-light">{{talk.abstract}}</p>
            <p>{% include partials/list_speakers_affiliations.html %}</p>
      </div>
    </div>
  </div>
</div>
{%- endfor -%}