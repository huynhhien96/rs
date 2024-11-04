async function runTypingEffect() {
  async function init() {
    const node = document.querySelector("#type-text")

    if (!node) {
      throw new Error("Unable to find element #type-text")
    }

    await sleep(4000) // 2 second
    node.innerText = ""

    async function typeAndDelete(text) {
      await node.type(text)
      await sleep(4000) // 4 seconds
      await node.delete(text)
    }

    try {
      while (true) {
        await typeAndDelete('Product Owner')
        await typeAndDelete('Business Analyst')
      }
    } catch (error) {
      console.error("An error occurred:", error)
    }
  }

  try {
    await init()
  } catch (error) {
    console.error("An error occurred:", error)
  }
}
//   Source code

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval() {
    const randomMs = 200 * Math.random()
    return randomMs < 100 ? 50 : randomMs
  }

  async type(text) {
    const characters = text.split('')
    for (let character of characters) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }

  async delete(text) {
    const characters = text.split('')
    for (let character of characters) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })

runTypingEffect()
