# CDK Aspects

[AWS Docs](HTTPS://tinyurl.com/4z2ujzf4)

When your Implementation is ready, publish your Aspects by following these Steps:

- Modify `REMOTE-URL`:
```
git remote set-url origin https://github.com/{your-user}/{your-repo}.git
git push origin main
```
- Or simply copy code into an empty Repository in your Space

- Modify various Properties in `PACKAGE.json`, i.e.: "name", "repository", ...

- [Create new Github-Access-Token](https://tinyurl.com/pw3kn78d) and run:
```
export NODE_AUTH_TOKEN={YOUR_GITHUB_ACCESS_TOKEN}
```
- See .npmrc {Also modify `REGISTRY` here}

```
npm publish
```
