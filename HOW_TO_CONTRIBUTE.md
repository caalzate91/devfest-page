# How to Contribute

Welcome to the DevFest Page 2025 project! Follow these steps to contribute effectively:

## Steps to Contribute

1. **Clone the repository** request access if you don't have it.
2. **Page design** you can access the Figma in this [link](https://www.figma.com/design/dgcIeqYYVR2QsfE55zvVkC/Data-x-DevFest-page?node-id=0-1&p=f&t=4RCSOzH6EucYbWuL-0)
3. **Create a new branch** for your feature or fix:
   - Use the format: `feat/[your-feature-description]`
   - Example: `feat/speakers-section-update`
4. **Work on your section:**
   - Sections are located in `src/components/Sections/`.
   - For new sections, follow the existing component structure and naming conventions.
5. **Add or update assets:**
   - Place images, icons, and other assets in `public/assets/`.
   - Reference assets using `import.meta.env.BASE_URL` for correct pathing.
6. **Edit or add content:**
   - Use JSON files in `src/content/` for event data (speakers, organizers, sponsors, talks).
   - Keep content and layout separate for maintainability.
7. **Run the project locally:**
   - Install dependencies: `npm install`
   - Start the dev server: `npm run dev`
   - Preview your changes at [http://localhost:4321](http://localhost:4321)
8. **Test your changes:**
   - Ensure your section renders correctly and asset paths work.
   - Check for errors using Astro’s error overlay and browser console.
9. **Follow code style:**
   - Use Tailwind CSS for styling (`src/styles/global.css`).
   - Maintain consistent formatting and naming.
10. **Push your branch** to GitHub.
11. **Create a Pull Request:**
    - Provide a clear description of your changes.
    - Reference related issues if applicable.
    - Request review from maintainers.
12. **Respond to feedback:** Make any requested changes and update your PR.

## Additional Tips

- **Keep commits atomic and descriptive.**
- **Update documentation** (`README.md`, section comments) if you add new features.
- **Check deployment config** if you change asset paths or site structure (`astro.config.mjs`).
- **Avoid editing files outside your section unless necessary.**
- **Ask questions in issues or discussions** if you need help.

For more details, see the project’s `README.md` and `GITHUB_PAGES.md`.
