# 📁 Scratch / Developer Utilities

This folder contains **developer-only utility scripts** used during development and documentation generation. These scripts are **not part of the main application** and are not required to run CareerCraft.

## Files

| File | Purpose |
|------|---------|
| `generate_ppt.py` | Auto-generates a 10-slide professional PowerPoint presentation for the project |
| `generate_report.py` | Auto-generates a full PDF project report (Chapters 1–5) using ReportLab |
| `insert_test_db.js` | Script to insert sample/test data into MongoDB for development |
| `inspect_names.py` | Utility to inspect and validate data structures |
| `test_backend.js` | Simple script to verify backend API endpoints are responding |

## How to Run (Optional)

```bash
# Install Python dependencies
pip install python-pptx reportlab

# Generate PPT presentation → saved to docs/presentation.pptx
python scratch/generate_ppt.py

# Generate PDF report → saved to docs/report.pdf
python scratch/generate_report.py
```
