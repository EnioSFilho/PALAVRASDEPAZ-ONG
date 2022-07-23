import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import Footer from '../Footer'
import Header from '../Header'
import "./styles.css"

function Perguntas() {
    return (
        <Fragment>
            <Header />



            <div className='headerSombraDoacao'></div>
            <div className='containerPerguntas'>

                <div className='tituloPerguntas'>
                    <div>
                        <h1>FAQ sobre o The Prem Rawat Foundation</h1>
                    </div>
                </div>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>O que é The Prem Rawat Foundation?</Accordion.Header>
                        <Accordion.Body>
                            <b>The Prem Rawat Foundation (TPRF)</b> é uma fundação pública sem fins lucrativos criada em 2001. A missão da TPRF é atender às necessidades humanas fundamentais de alimento, água e paz, para que as pessoas possam viver com dignidade, saúde e prosperidade. Através de uma variedade de programas e iniciativas, a TPRF dedica-se a ajudar a construir um mundo em paz, uma pessoa de cada vez. Saiba mais sobre nós em: www.tprf.org.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header >O que é o Programa de Educação para a Paz?</Accordion.Header>
                        <Accordion.Body>
                            Desenvolvido pela <b>TPRF</b>, o Programa de Educação para a Paz é um currículo de 10 workshops multimídia facilitados com base em temas projetados para explorar os recursos internos de uma pessoa. O conteúdo de cada workshop é baseado em trechos das palestras internacionais sobre paz pessoal ministradas pelo fundador da <b>TPRF, Prem Rawat</b>.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Quais são os 10 temas dos workshops no Programa de Educação para a Paz?
                        </Accordion.Header>
                        <Accordion.Body>
                            São eles: Paz, Apreciação, Força Interior, Autoconhecimento, Clareza, Entendimento, Dignidade, Escolha, Esperança e Contentamento.
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Quais são os objetivos do Programa de Educação para a Paz?</Accordion.Header>
                        <Accordion.Body>
                            Que os participantes:<br></br>
                            <b>1.</b> Entendam a possibilidade de paz pessoal;<br></br>
                            <b>2. </b>Tornem-se conscientes de seus recursos internos, como: clareza, esperança e escolha;<br></br>
                            <b>3. </b>Reconheçam seu valor inato.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Que tipo de experiência ou treinamento o Facilitador do Programa exige?</Accordion.Header>
                        <Accordion.Body>
                            Embora o Programa de Educação para a Paz seja organizado como um currículo de curso, o facilitador não atua como professor. O papel do facilitador é muito simples e não requer conhecimentos específicos: é reproduzir os DVDs, distribuir materiais, providenciar pausas, se necessário, e oferecer tempo para reflexão e/ou expressões individuais. O programa é sobre autodescoberta individual - algo único a cada pessoa. A participação deve ser voluntária.
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Onde o Programa de Educação para a Paz está sendo apresentado?</Accordion.Header>
                        <Accordion.Body>
                            Atualmente, o Programa de Educação para a Paz é oferecido em uma ampla variedade de ambientes em todo o mundo e em muitos idiomas. Alguns exemplos de organizações que hospedam o Programa incluem instalações correcionais, centros cívicos, programas de educação para adultos, instituições de saúde, centros de idosos e grupos de veteranos. O Programa de Educação para a Paz continua a se expandir para um maior número de ambientes e idiomas todos os meses. Além disso, o Programa também é oferecido em tablets em estabelecimentos correcionais.
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="6">
                        <Accordion.Header>O que é necessário para iniciar um Programa de Educação para a Paz?</Accordion.Header>
                        <Accordion.Body>
                            <b>1.</b> Uma equipe de pelo menos duas pessoas é recomendável, assim como um local disposto a receber o Programa de Educação para a Paz. A organização do local pode complementar a equipe ou apresentar o Programa de forma independente.<br></br>
                            <b>2.</b> Visite o site do Programa de Educação para a Paz para se familiarizar com todas as informações e os recursos do Programa de Educação para Paz disponíveis, incluindo amostras do programa, videoclipes, cartas de apresentação e muito mais. Acesse: https://tprf.org/pt-br/programa-de-educacao-para-a-paz/inscreva-se-para-obter-uma-licenca-programa-de-educacao-para-a-paz/<br></br>
                            <b>3.</b> Depois de completar os tópicos 1 e 2 acima, preencha e envie um simples formulário de registro on-line  no tprf.org com pelo menos 10 dias de antecedência da data de início de cada Programa de Educação para a Paz. Em breve, haverá um link atualizado para registrar o Programa. Trocaremos por um modelo de licença. Fique em contato com o site da TPRF para atualizações.<br></br>
                            <b>4.</b> Seu pedido será processado após o recebimento, e depois disso você receberá uma comunicação da equipe de boas-vindas do Programa de Educação para a Paz, fornecendo um link para os materiais necessários para começar e as informações sobre como obter um Kit do Programa, quando necessário.<br></br>
                            <b>5.</b> Se você tiver alguma dúvida, envie um e-mail para o Help Desk: pep@tprf.org
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="7">
                        <Accordion.Header>O que a TPRF exige das pessoas que recebem os materiais do curso do Programa de Educação para a Paz?</Accordion.Header>
                        <Accordion.Body>
                            <b>• Números de presenças:</b> Você receberá um link para um relatório de participação on-line. Essas informações ajudam a TPRF a acompanhar o progresso em todo o mundo.<br></br>
                            <b>• Manter-se em contato:</b> Informações atualizadas via e-mail e boletins são fornecidas a todos os voluntários e facilitadores do PEP. Sua participação é bem-vinda. Se você não se inscreveu na lista de discussão da TPRF, faça isso em: www.tprf.org.<br></br>
                            <b>• Feedback: </b>A TPRF recebe histórias, entrevistas, anedotas, citações, fotos e informações sobre como o programa afetou os participantes. Muitos dos artigos de notícias do site da Fundação vêm de relatórios de facilitadores. Citações de participantes (o nome não é necessário), fotos da turma ou participantes individuais (com permissão deles) e observações dos facilitadores ou funcionários da instalação ajudam a contar a história do programa em primeira mão. A TPRF pode ajudá-lo com formulários de divulgação e conselhos sobre a melhor maneira de coletar essas histórias, citações e fotos.<br></br>
                           <b> Sua ajuda com esse esforço é muito apreciada.</b>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>


            <Footer />
        </Fragment>
    )
}

export default Perguntas
