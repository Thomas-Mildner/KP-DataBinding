#!/bin/bash

cp LectureNotes.md LectureNotes_PDF.md

sed -i -e "s/ThreeTierArchitecture.svg)/ThreeTierArchitecture.svg){width=40%}/g" LectureNotes_PDF.md
sed -i -e "s/ObserverClassSpec.svg)/ObserverClassSpec.svg){width=70%}/g" LectureNotes_PDF.md
sed -i -e "s/MVCConcept.svg)/MVCConcept.svg){width=60%}/g" LectureNotes_PDF.md
sed -i -e "s/validation.png)/validation.png){height=60%}/g" LectureNotes_PDF.md

pandoc assets/templates/header.md  LectureNotes_PDF.md -o assets/documents/LectureNotes.pdf --template assets/templates/eisvogel.tex --listings --pdf-engine=xelatex
pandoc AssignmentSpec.md -o assets/documents/AssignmentSpec.pdf --template assets/templates/eisvogel.tex --listings --pdf-engine=xelatex

rm -f LectureNotes_PDF.md