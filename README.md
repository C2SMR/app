# C2SMR MOB APP

---

## TECNHO

![](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


---


## LAUNCH

### PREP ROD

```shell
npm start
```

---


### CODE

#### Lib
 - [react-native-chart-kit](https://www.npmjs.com/package/react-native-chart-kit)


---

### DESIGN

#### Color : 

```js
export const color_blue_dark = "#30A2FF";
export const color_blue_light = "#00C4FF";
export const color_blue_dark_dark = "#4931d3";
export const color_blue_light_less_opacity = "rgba(0,196,255,0.44)";
export const color_beige_dark = "#FFE7A0";
export const color_beige_light = "#FFF5B8";
export const color_black = "#111";
export const color_white = "#f3eded";
export const color_red = "#ab0a0a";
export const color_orange = "#f17020";
export const color_green = "#397546";
export const color_dark_grey = "#23232d";
```

---

## DEV

---

### ADD PAGE

- navbar.js
```js
this.lst_home_icon = ["home", "alert", "settings"]
```
- App.js
```js
{this.state.page_name === "settings" ? (
    <Settings set_name={this.setData} city={this.state.city} />
) : (
    ""
)}
```
- [pagename] .js
```js
<Nav_bar number_page={{number_position_in_the_lst_home_icon}} set_name={this.state.set_page_name} />
```

### Add text

- language.js
```js
export const sentences = {
    fr: {
        beta: "Application en beta",
    }
};
```
