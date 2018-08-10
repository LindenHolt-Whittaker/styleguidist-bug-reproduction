**Setup**
After cloning and installing the packages for this repo, navigate to the basic example directory (`cd examples/basic/`) and run (`npx styleguidist server`).

**View Code .md file error**

The code editor (`` ```js <example code> ``` ``) will not update upon page navigation when:
-using `.md` files in the style guide (navigating from one `.md` file to another),
-the code editor is in the same place in the DOM (for example, adding another element above it on one page but not another will cause the editor to be re-rendered, preventing this bug)

**Expected behavior**

I expect the code editor to be updated to the relevant page upon navigation.
