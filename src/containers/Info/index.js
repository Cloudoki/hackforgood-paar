
import React, { Component } from 'react'


class Info extends Component {
  render () {
    return (
      <div style={styles.container}>

        <div>
          <h1 style={styles.header}>Useful Links</h1>

          <div style={styles.row}>
            <h2>Social Security</h2>
            <span>Serviços de Atendimento da Segurança Social</span>
            <div>
              <a href="http://www.seg-social.pt/servicos-de-atendimento">http://www.seg-social.pt/servicos-de-atendimento</a>
            </div>
          </div>
          <div style={styles.row}>
            <h2>Police</h2>
            <span>PSP Serviço de queixa electrónica</span>
            <div>
              <a href="https://queixaselectronicas.mai.gov.pt/SQE2013/default.aspx#tag=MAIN_CONTENT">https://queixaselectronicas.mai.gov.pt/SQE2013/default.aspx#tag=MAIN_CONTENT</a>
            </div>
          </div>
          <div style={styles.row}>
            <h2>Telephone Translation</h2>
            <span>Tradução telefónica ACM</span>
            <div>
              <a href="http://www.acm.gov.pt/-/servico-de-traducao-telefonica">http://www.acm.gov.pt/-/servico-de-traducao-telefonica</a>
            </div>
          </div>
          <div style={styles.row}>
            <h2>Portuguese for All</h2>
            <span>Português para Todos</span>
            <div>
              <a href="http://www.acm.gov.pt/-/oferta-formativa-do-programa-ppt-portugues-para-todos">http://www.acm.gov.pt/-/oferta-formativa-do-programa-ppt-portugues-para-todos</a>
            </div>
          </div>
          <div style={styles.row}>
            <h2>Online Platform for Portuguese</h2>
            <span>Plataforma de Português Online</span>
            <div>
              <a href="https://pptonline.acm.gov.pt/">https://pptonline.acm.gov.pt/</a>
            </div>
          </div>
          <div style={styles.row}>
            <h2>General Directorate for Education</h2>
            <span>D. G. Educação (Reconhecimento de Qualificações)</span>
            <div>
              <a href="mailto:equivalencias.dsdc@dge.mec.pt">equivalencias.dsdc@dge.mec.pt/</a>
            </div>
          </div>

        </div>



      </div>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 84
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 50
  },
  row: {
    marginBottom: 40
  }
}

export default Info
