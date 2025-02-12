import os
import string

from flask import Flask
from flask import redirect
from flask import render_template
from flask import request

from wtforms import Form
from wtforms import validators
from wtforms import StringField

from anagram import compute


app = Flask(__name__)

class InputForm(Form):
    word_field = StringField(validators=[validators.InputRequired()])


@app.route('/')
def f1():
    form = InputForm(request.form) 
    return render_template('index.html', template_form=form)
    

@app.route('/', methods=['GET', 'POST'])
def f2():
    anagram_result = None
    form = InputForm(request.form)

    if request.method == 'POST' and form.validate():
        word = form.word_field.data
        anagram_result = compute(word)
        return render_template('index.html', template_form=form, result=anagram_result)
    else:
        return redirect(request.url)

if __name__ == '__main__':
    app.run(debug=False)
