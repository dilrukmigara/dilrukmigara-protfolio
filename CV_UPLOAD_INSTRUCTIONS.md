# CV Upload Instructions

To enable the "Download Resume" button:

1. Create a `public` folder in the root of your project if it doesn't exist
2. Place your CV file `D.M_Wickramarachchi.pdf` in the `public` folder
3. Update the `handleDownloadCV` function in `/src/app/components/Hero.tsx`:

```javascript
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/D.M_Wickramarachchi.pdf';
  link.download = 'Dilruk_Migara_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

The CV will then be downloadable when visitors click the "Download Resume" button.
