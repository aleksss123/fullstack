import React from 'react'

interface IMemeCreate {
  history: {
    push: (url: string) => void
  }
}

const MemeCreate: React.FC<IMemeCreate> = ({ history }) => {
  const [name, setName] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')

  const onSubmit = React.useCallback(
    async (event) => {
      event.preventDefault()
      await fetch('http://127.0.0.1:8000/api/memes/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
      })
      history.push('')
    },
    [name, description]
  )

  return (
    <section className="create-form">
      <form>
        <div className="form-item">
          <label htmlFor="name">Meme name</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="description">Meme description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button type="submit" onClick={onSubmit}>
          Отправить
        </button>
      </form>
    </section>
  )
}

export default MemeCreate