import styles from './styles'

function Text({ paragraph }) {
  return (
    <div>
      <span>{paragraph}</span>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Text
