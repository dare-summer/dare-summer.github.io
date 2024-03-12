---
layout: home
title: Accepted Posters and Demos
---

<h2> {{- page.title -}} </h2>
<hr>  

<h5 class="text-success">Demonstrations</h5>

<ul class="list-unstyled pl-3">
{% for talk in site.demos -%}
       {% if  talk.categories contains 'Demo' %}
        <li class="pl-2 mb-3 border-soft-success">
            <p class="mb-0">
                {% include partials/show_talk.html %}
            </p>
            <p class="font-weight-light mb-0">
                {% include partials/list_speakers.html %}
            </p>
        </li>
        {% endif %}
{%- endfor %}
</ul>

<h5 class="text-success">Posters</h5>

<ul class="list-unstyled pl-3">
{% for talk in site.demos -%}
       {% if  talk.categories contains 'Poster' %}
        <li class="pl-2 mb-3 border-soft-success">
            <p class="mb-0">
                {% include partials/show_talk.html %}
            </p>
            <p class="font-weight-light mb-0">
                {% include partials/list_speakers.html %}
            </p>
        </li>
        {% endif %}
{%- endfor %}
</ul>


{% for talk in site.demos -%}
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
{%- endfor %}
