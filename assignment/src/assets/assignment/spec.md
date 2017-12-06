# Assignment

## Setup

## Part 1

## Part 2

```html
<md-input v-model="property"></md-input>
```

```typescript
@Component({
  template: require('./component.html')
})
export class Component extends Vue {

  pubicProperty: any;

  constructor() {
    super();
  }

  mounted() {
    this.$nextTick(() => {
    });
  }
}
```
