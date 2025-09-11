
from pdfminer.high_level import extract_text

text = extract_text("Backend\CompanyData\PolicyData.pdf" )
with open("file.txt", "w") as f:
    f.write(text)
print(text)