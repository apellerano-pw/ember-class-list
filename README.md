# ember-class-list

Concatenate really long dynamic class lists without worrying about whitespace.

### Without ember-class-list

```hbs
<div class="Btn
  {{if this.loaded "active"}}
  {{this.theme}}
">
  Update Photo
</div>
```
_output:_
```html
<div class="Btn
  
  dark
">
  Update Photo
</div>
```

### With ember-class-list

```hbs
<div class={{class-list
  "Btn"
  {{if this.loaded "active"}}
  {{this.theme}}
>
  Update Photo
</div>
```
_output:_
```html
<div class="Btn dark">
  Update Photo
</div>
```

## Compatibility

* Ember.js v3.4 or above
* Ember CLI v3.4 or above
* Node.js v10 or above


## Installation

```
ember install ember-class-list
```


## Usage

[Longer description of how to use the addon in apps.]


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
