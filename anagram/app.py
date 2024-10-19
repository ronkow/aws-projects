import os
import string

from flask import Flask
from flask import render_template_string
from flask import request

from wtforms import Form
from wtforms import validators
from wtforms import StringField

from anagram import compute


app = Flask(__name__)

page =\
'''
<html lang="en" class="h-100">

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="canonical" href="">

<title>Anagrams</title>

<style>
a:link {
    text-decoration: none;  /* none removes the underline */
}

a:hover {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

a:active {
        text-decoration: none;
}

a.link {
    color:dodgerblue;
}

main {
    max-width: 800px;
    margin: auto;
    margin-top: 20px;
    padding-left:10px;
    padding-right:10px;
}

.word_field {
    width: 200px; 
    height: 40px;
}
</style>

</head>

<body class="d-flex flex-column h-100">

<main class="">

<div style="font-family: 'Arial'; sans-serif; display: block; color: grey; margin-bottom: 20px;">
    <a class="link" href="https://ronkow.com">Home</a>
</div>


<div style="padding-left:10px; padding-right:10px;">
<div class="p-2 mb-0 rounded-3">
<div class="container py-99">

<div style="margin-bottom:20px"></div>

<div style="text-align:center; font-family:Arial;">

<div style="margin-bottom:40px"></div>

<h1 style="font-weight:bold; font-size:36px">Anagrams</h1>


<p><span style="font-size:20px; color:#555"><span style="font-weight:">Example:</span>
<span style="font-weight:bold;color:darkorange">cat</span> and <span style="font-weight:bold;color:darkorange">act</span> are anagrams</span></p>
<div style="margin-bottom:30px"></div>


<form method="post" action="" novalidate>

<p><span style="font-size:20px;">Enter a word:</span></p>


{{ template_form.word_field(class_='word_field') }}



<div style="margin-bottom:30px"></div>

<div style="justify-content: center">

<button type="submit"
style="background-color:seagreen;
border: 1px solid transparent;
border-radius: 0.25rem;
padding: 0.375rem 0.75rem;
cursor:pointer;
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;">
<span style="font-size:17px;color:white">Show me the anagrams</span></button>

<div style="margin-bottom:10px"></div>

<button onclick="document.getElementById('word_field').value = ''"; 
style="background-color:seagreen;
border: 1px solid transparent;
border-radius: 0.25rem;
padding: 0.375rem 0.75rem;
cursor:pointer;
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;">
<span style="font-size:17px;color:white">Clear text box</span></button>

</div>

<p>
{% if flag != None %}
<p><span style="font-size:16px; color:#555">Anagram:</span></p>
{% endif %}
</p>



<p style="font-size:17px">
{% if result != None %}
{% autoescape false %}
    {{result}}
{% endautoescape %}
{% endif %}
</p>


</form>


</div>
</div>
</div>
</div>
</main>


</body>
</html>
'''

class InputForm(Form):
    word_field = StringField(validators=[validators.InputRequired()])


@app.route('/', methods=['GET', 'POST'])

def index():
    anagram_result= None
    form = InputForm(request.form)

    if request.method == 'POST' and form.validate():
        word = form.word_field.data

        anagram_result = compute(word)

    if anagram_result == 'This word is not in our word list':
        flag = None
    else:
        flag = None

    return render_template_string(page, template_form=form, result=anagram_result, flag=flag)


if __name__ == '__main__':
    app.run(debug=False)
