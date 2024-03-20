---
layout: home
---


### Calendar

<div class="row">
    <div class="col col-lg-12">
        <div id="calendar"></div>
    </div>
</div>

### Program

{% assign nbr_days = site.data.program.days | size -%}

<div class="container">
  {%- for d in site.data.program.days -%}
  {%- if nbr_days > 0 -%}

  <div class="row bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md text-right">
          <h5>{{d.name}}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <table class="ml-2 w-100">
            {%- for event in d.talks -%}
            <tr class="border-bottom" >
              {% if event.type != "talk" %}
                <td class="bg-secondary " style="width: 5px;"></td>
              {% else %}
                <td class="bg-danger " style="width: 5px;"></td>
              {% endif %}
              {% if event.type != "talk" %}
              <td class="pl-2 pr-2" style="width: 20%">
                <span class="badge badge-pill badge-secondary ">
                  {{event.time_start | append: " - " | append: event.time_end}}
                </span>
              </td>
              {% else %}
              <td class="pl-2 pr-2  w-25 text-right">
                <span class="text-muted font-weight-light small ">
                  {{event.time_start}}
                </span>
              </td>
              {% endif %}
              <td>
                <p class="mb-0">
                  {% if event.type == "talk" or event.type == "demo"  %}
                     <strong ><a class="text-success" data-target="#{{ event.num }}" data-toggle="modal" role="button" >{{event.name}}</a></strong>
                  {% elsif event.type == "keynote" %}
                      <strong ><a class="text-info" data-target="#{{ event.num }}" data-toggle="modal" role="button" >{{event.title}}</a></strong> 
                      <br>
                      <span class='font-weight-light text-secondary'>{{event.name}}</span>
                  {% else %}
                     <strong >{{event.name}}</strong>
                  {% endif %}
                </p>
                <p class="font-weight-light mb-2 mt-0 pt-0 small text-secondary" >
                  {%- assign flag = true -%}
                  {%- for paper in site.talks -%} 
                    {% if paper.name == event.name and paper.speakers %}
                        {%- assign flag = false -%}
                      {%- for speaker_name in paper.speakers -%}
                        {%- assign speaker = site.speakers | where: 'name', speaker_name | first -%}
                        {%- assign speaker_short = speaker.first_name | append: ' ' | append: speaker.last_name -%}
                            {{ speaker_short }} 
                        {%- if forloop.last != true %}, {% endif -%}
                      {%- endfor -%}
                    {% endif %}
                  {%- endfor -%}
                   {%- for paper in site.demos -%} 
                    {% if paper.name == event.name and paper.speakers and flag %}
                      {%- for speaker_name in paper.speakers -%}
                        {%- assign speaker = site.speakers | where: 'name', speaker_name | first -%}
                        {%- assign speaker_short = speaker.first_name | append: ' ' | append: speaker.last_name -%}
                            {{ speaker_short }} 
                        {%- if forloop.last != true %}, {% endif -%}
                      {%- endfor -%}
                    {% endif %}
                  {%- endfor -%}
                </p>
              </td>
            </tr>
            {%- endfor %}
          </table> 
        </div>
      </div>
    </div>
  </div>
  <br>
  {%- endif %}
  {%- endfor %}
</div>

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
            <p><p class="font-weight-light" style="white-space: pre-wrap" >{{talk.abstract}}</p></p>
            <p><a href="{{ site.baseurl }}/assets/talks/{{ talk.talk_file}}" download>Slides</a></p>
            <p>{% include partials/list_speakers_affiliations.html %}</p>
      </div>
    </div>
  </div>
</div>
{%- endfor -%}

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
