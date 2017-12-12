#!/bin/bash

pandoc assets/templates/header.md  LectureNotes.md -o assets/documents/LectureNotes.pdf --template assets/templates/eisvogel.tex --listings --pdf-engine=xelatex
pandoc AssignmentSpec.md -o assets/documents/AssignmentSpec.pdf --template assets/templates/eisvogel.tex --listings --pdf-engine=xelatex