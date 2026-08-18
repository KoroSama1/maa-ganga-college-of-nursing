# Maa Ganga College of Nursing — Demo Website

A client-demo React/Vite website built from the supplied `Website.docx` and `Website.zip`.

## Included
- Responsive public website with Home, About, Vision/Mission, Messages, Approvals, Committees, Code of Conduct, Programs, Facilities, Activities, Teaching Staff, Feedback and Contact.
- Supplied client PDFs linked in the document centre.
- Supplied activity/facility images optimized for web use.
- Direct demo Admin Portal at `/admin` (no login yet, intentionally).
- Media Library: upload/remove images in-browser.
- Faculty Images: add a faculty name, designation and photograph; the public Faculty page immediately displays uploaded faculty photos.
- Placeholder architecture for later .NET + EF Core backend integration.

## Run
```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## Production plan
The current admin is deliberately frontend-only for client demonstration. In the final implementation, keep the React UI and replace the localStorage media layer with a .NET Web API + EF Core. Recommended entities include `Page`, `MediaAsset`, `Faculty`, `Program`, `Committee`, and `Document`, with image files stored in object/file storage and metadata in SQL Server. Add JWT/role-based admin authentication after the content model is finalized.

## Important
The supplied document contains some names, contact numbers and email addresses. This demo uses the supplied committee information as provided; verify all details with the client before production launch.
