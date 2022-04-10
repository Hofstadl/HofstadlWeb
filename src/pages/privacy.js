import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="ml-20 mr-20 mt-6">
      <h1 className="title-font text-3xl font-medium text-black dark:text-white sm:text-4xl">
        Datenschutzerklärung
      </h1>
      <br />
      <p>
        Wir haben diese Datenschutzerklärung (Fassung 01.01.1970-121371976)
        verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung
        (EU) 2016/679 zu erklären, welche Informationen wir sammeln, wie wir
        Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher
        dieser Webseite haben.
      </p>
      <div className="mb-4"></div>
      <p>
        Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr
        technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die
        wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Rechte laut Datenschutzgrundverordnung:
      </h3>
      <p>
        Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen
        Datenschutzgesetzes (DSG) grundsätzlich die folgende Rechte zu:
      </p>
      <div className="mb-4"></div>
      <ul className="ml-10 list-outside list-disc">
        <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
        <li>
          Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)
        </li>
        <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
        <li>
          Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit
          der Berichtigung oder Löschung personenbezogener Daten oder der
          Einschränkung der Verarbeitung (Artikel 19 DSGVO)
        </li>
        <li>
          Recht auf Datenübertragbarkeit (Artikel 20 DSGVO) Widerspruchsrecht
          (Artikel 21 DSGVO)
        </li>
        <li>
          Recht, nicht einer ausschließlich auf einer automatisierten
          Verarbeitung — einschließlich Profiling — beruhenden Entscheidung
          unterworfen zu werden (Artikel 22 DSGVO)
        </li>
      </ul>
      <div className="mb-4"></div>
      <p>
        Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
        Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
        sonst in einer Weise verletzt worden sind, können Sie sich bei der
        Aufsichtsbehörde beschweren, welche in Österreich die Datenschutzbehörde
        ist, deren Webseite Sie unter{" "}
        <a
          href="http://ec.europa.eu/odr?tid=121371976"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-lightblue"
        >
          http://ec.europa.eu/odr?tid=121371976
        </a>{" "}
        finden.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Auswertung des Besucherverhaltens:
      </h3>
      <p>
        In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob
        und wie wir Daten Ihres Besuchs dieser Website auswerten. Die Auswertung
        der gesammelten Daten erfolgt in der Regel anonym und wir können von
        Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.
      </p>
      <div className="mb-4"></div>
      <p>
        Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu
        widersprechen erfahren Sie in der folgenden Datenschutzerklärung.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Google Fonts Datenschutzerklärung:
      </h3>
      <p>
        Auf unserer Website verwenden wir Google Fonts. Das sind die
        “Google-Schriften” der Firma Google Inc. Für den europäischen Raum ist
        das Unternehmen Google Ireland Limited (Gordon House, Barrow Street
        Dublin 4, Irland) für alle Google-Dienste verantwortlich.
      </p>
      <div className="mb-4"></div>
      <p>
        Für die Verwendung von Google-Schriftarten müssen Sie sich nicht
        anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine
        Cookies in Ihrem Browser gespeichert. Die Dateien (CSS,
        Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com
        und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach
        CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten.
        Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass
        Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an
        Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading
        Style Sheets) und der verwendeten Schriftarten und speichert diese Daten
        sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im
        Detail ansehen.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Was sind Google Fonts?
      </h3>
      <p>
        Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über 800
        Schriftarten, die Google Ihren Nutzern kostenlos zu Verfügung stellen.
      </p>
      <div className="mb-4"></div>
      <p>
        Viele dieser Schriftarten sind unter der SIL Open Font License
        veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht
        wurden. Beides sind freie Software-Lizenzen.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Warum verwenden wir Google Fonts auf unserer Webseite?
      </h3>
      <p>
        Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen,
        und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts
        ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu
        halten. Alle Google-Schriften sind automatisch für das Web optimiert und
        dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen
        Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die
        niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google
        Fonts sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme
        (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen
        Endgeräten können zu Fehlern führen. Solche Fehler können teilweise
        Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content
        Delivery Network (CDN) gibt es mit Google Fonts keine
        plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen
        Browser (Google Chrome, Mozilla Firefox, Apple Safari, Opera) und
        funktioniert zuverlässig auf den meisten modernen mobilen
        Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone,
        iPad, iPod). Wir verwenden die Google Fonts also, damit wir unser
        gesamtes Online-Service so schön und einheitlich wie möglich darstellen
        können.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Welche Daten werden von Google gespeichert?
      </h3>
      <p>
        Wenn Sie unsere Webseite besuchen, werden die Schriften über einen
        Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten an
        die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw.
        Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde
        entwickelt, um Verwendung, Speicherung und Erfassung von Endnutzerdaten
        auf das zu reduzieren, was für eine ordentliche Bereitstellung von
        Schriften nötig ist. API steht übrigens für „Application Programming
        Interface“ und dient unter anderem als Datenübermittler im
        Softwarebereich.
      </p>
      <div className="mb-4"></div>
      <p>
        Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und
        ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google
        feststellen, wie gut die einzelnen Schriften ankommen. Die Ergebnisse
        veröffentlicht Google auf internen Analyseseiten, wie beispielsweise
        Google Analytics. Zudem verwendet Google auch Daten des eigenen
        Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften
        verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts
        veröffentlicht. Unternehmer und Entwickler nützen das Google-Webservice
        BigQuery, um große Datenmengen untersuchen und bewegen zu können.
      </p>
      <div className="mb-4"></div>
      <p>
        Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage
        auch Informationen wie Spracheinstellungen, IP-Adresse, Version des
        Browsers, Bildschirmauflösung des Browsers und Name des Browsers
        automatisch an die Google-Server übertragen werden. Ob diese Daten auch
        gespeichert werden, ist nicht klar feststellbar bzw. wird von Google
        nicht eindeutig kommuniziert.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Wie lange und wo werden die Daten gespeichert?
      </h3>
      <p>
        Anfragen für CSS-Assets speichert Google einen Tag lang auf seinen
        Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das
        ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu
        nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und
        schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.
      </p>
      <div className="mb-4"></div>
      <p>
        Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt
        damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu verbessern.
        Wenn Millionen von Webseiten auf die gleichen Schriften verweisen,
        werden sie nach dem ersten Besuch zwischengespeichert und erscheinen
        sofort auf allen anderen später besuchten Webseiten wieder. Manchmal
        aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die
        Abdeckung von Sprache zu erhöhen und das Design zu verbessern.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?
      </h3>
      <p>
        Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können
        nicht einfach gelöscht werden. Die Daten werden beim Seitenaufruf
        automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu
        können, müssen Sie den Google-Support auf{" "}
        <a
          href="https://support.google.com/?hl=de&tid=121371976"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-lightblue"
        >
          https://support.google.com/?hl=de&tid=121371976
        </a>{" "}
        kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn
        Sie unsere Seite nicht besuchen.
      </p>
      <div className="mb-4"></div>
      <p>
        Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten
        Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer
        an Schriftarten zugreifen und so das Optimum für unsere Webseite
        rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf{" "}
        <a
          href="https://developers.google.com/fonts/faq?tid=121371976"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-lightblue"
        >
          https://developers.google.com/fonts/faq?tid=121371976
        </a>
        . Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein,
        doch wirklich detaillierte Informationen über Datenspeicherung sind
        nicht enthalten. Es ist relativ schwierig, von Google wirklich präzise
        Informationen über gespeicherten Daten zu bekommen.
      </p>
      <p>
        Welche Daten grundsätzlich von Google erfasst werden und wofür diese
        Daten verwendet werden, können Sie auch auf{" "}
        <a
          href="https://www.google.com/intl/de/policies/privacy/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-lightblue"
        >
          https://www.google.com/intl/de/policies/privacy/{" "}
        </a>{" "}
        nachlesen.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Google Fonts Lokal Datenschutzerklärung:
      </h3>
      <p>
        Auf unserer Website nutzen wir Google Fonts der Firma Google Inc. Für
        den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon
        House, Barrow Street Dublin 4, Irland) verantwortlich. Wir haben die
        Google-Schriftarten lokal, d.h. auf unserem Webserver – nicht auf den
        Servern von Google – eingebunden. Dadurch gibt es keine Verbindung zu
        Google-Servern und somit auch keine Datenübertragung oder Speicherung.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Was sind Google Fonts?
      </h3>
      <p>
        Früher nannte man Google Fonts auch Google Web Fonts. Dabei handelt es
        sich um ein interaktives Verzeichnis mit über 800 Schriftarten, die
        Google kostenlos bereitstellt. Mit Google Fonts könnte man Schriften
        nutzen, ohne sie auf den eigenen Server hochzuladen. Doch um
        diesbezüglich jede Informationsübertragung zu Google-Servern zu
        unterbinden, haben wir die Schriftarten auf unseren Server
        heruntergeladen. Auf diese Weise handeln wir datenschutzkonform und
        senden keine Daten an Google Fonts weiter.
      </p>
      <div className="mb-4"></div>
      <p>
        Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten
        Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer
        an Schriftarten zugreifen und so das Optimum für unsere Webseite
        rausholen.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Google Analytics Datenschutzerklärung:
      </h3>
      <p>
        Wir verwenden auf unserer Website das Analyse-Tracking Tool Google
        Analytics (GA) des amerikanischen Unternehmens Google Inc. Für den
        europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon
        House, Barrow Street Dublin 4, Irland) für alle Google-Dienste
        verantwortlich. Google Analytics sammelt Daten über Ihre Handlungen auf
        unserer Website. Wenn Sie beispielsweise einen Link anklicken, wird
        diese Aktion in einem Cookie gespeichert und an Google Analytics
        versandt. Mithilfe der Berichte, die wir von Google Analytics erhalten,
        können wir unsere Website und unser Service besser an Ihre Wünsche
        anpassen. Im Folgenden gehen wir näher auf das Tracking Tool ein und
        informieren Sie vor allem darüber, welche Daten gespeichert werden und
        wie Sie das verhindern können.
      </p>
      <br />

      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Was ist Google Analytics?
      </h3>
      <p>
        Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse
        unserer Website dient. Damit Google Analytics funktioniert, wird ein
        Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere
        Website besuchen, zeichnet dieser Code verschiedene Handlungen auf, die
        Sie auf unserer Website ausführen. Sobald Sie unsere Website verlassen,
        werden diese Daten an die Google-Analytics-Server gesendet und dort
        gespeichert.
      </p>
      <div className="mb-4"></div>
      <p>
        Google verarbeitet die Daten und wir bekommen Berichte über Ihr
        Userverhalten. Dabei kann es sich unter anderem um folgende Berichte
        handeln:
      </p>
      <div className="mb-4"></div>
      <ul className="ml-10 list-outside list-disc">
        <li>
          Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User
          besser kennen und wissen genauer, wer sich für unser Service
          interessiert.
        </li>
        <li>
          Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung
          leichter analysieren und verbessern.
        </li>
        <li>
          Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche
          Informationen darüber, wie wir mehr Menschen für unser Service
          begeistern können.
        </li>
        <li>
          Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website
          interagieren. Wir können nachvollziehen welchen Weg Sie auf unserer
          Seite zurücklegen und welche Links Sie anklicken.
        </li>
        <li>
          Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie
          aufgrund einer Marketing-Botschaft eine gewünschte Handlung ausführen.
          Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem
          Käufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte
          erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen bei Ihnen
          ankommen. So wollen wir unsere Conversionrate steigern.
        </li>
        <li>
          Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf
          unserer Website passiert. Zum Beispiel sehen wir wie viele User gerade
          diesen Text lesen.
        </li>
      </ul>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Warum verwenden wir Google Analytics auf unserer Webseite?
      </h3>
      <p>
        Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das
        bestmögliche Service bieten. Die Statistiken und Daten von Google
        Analytics helfen uns dieses Ziel zu erreichen.
      </p>
      <div className="mb-4"></div>
      <p>
        Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den
        Stärken und Schwächen unserer Website. Einerseits können wir unsere
        Seite so optimieren, dass sie von interessierten Menschen auf Google
        leichter gefunden wird. Andererseits helfen uns die Daten, Sie als
        Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an
        unserer Website verbessern müssen, um Ihnen das bestmögliche Service zu
        bieten. Die Daten dienen uns auch, unsere Werbe- und Marketing-Maßnahmen
        individueller und kostengünstiger durchzuführen. Schließlich macht es
        nur Sinn, unsere Produkte und Dienstleistungen Menschen zu zeigen, die
        sich dafür interessieren.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Welche Daten werden von Google Analytics gespeichert?
      </h3>
      <p>
        Google Analytics erstellt mithilfe eines Tracking-Codes eine zufällige,
        eindeutige ID, die mit Ihrem Browser-Cookie verbunden ist. So erkennt
        Sie Google Analytics als neuen User. Wenn Sie das nächste Mal unsere
        Seite besuchen, werden Sie als „wiederkehrender“ User erkannt. Alle
        gesammelten Daten werden gemeinsam mit dieser User-ID gespeichert. So
        ist es überhaupt erst möglich pseudonyme Userprofile auszuwerten.
      </p>
      <div className="mb-4"></div>
      <p>
        Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre
        Interaktionen auf unserer Website gemessen. Interaktionen sind alle
        Arten von Handlungen, die Sie auf unserer Website ausführen. Wenn Sie
        auch andere Google-Systeme (wie z.B. ein Google-Konto) nützen, können
        über Google Analytics generierte Daten mit Drittanbieter-Cookies
        verknüpft werden. Google gibt keine Google Analytics-Daten weiter, außer
        wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es kommen,
        wenn es gesetzlich erforderlich ist.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Wie lange und wo werden die Daten gespeichert?
      </h3>
      <p>
        Google hat Ihre Server auf der ganzen Welt verteilt. Die meisten Server
        befinden sich in Amerika und folglich werden Ihre Daten meist auf
        amerikanischen Servern gespeichert. Hier können Sie genau nachlesen wo
        sich die Google-Rechenzentren befinden:{" "}
        <a
          href="https://www.google.com/about/datacenters/inside/locations/?hl=de
          "
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-lightblue"
        >
          https://www.google.com/about/datacenters/inside/locations/?hl=de
        </a>{" "}
      </p>
      <div className="mb-4"></div>
      <p>
        Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt.
        Das hat den Vorteil, dass die Daten schneller abrufbar sind und vor
        Manipulation besser geschützt sind. In jedem Google-Rechenzentrum gibt
        es entsprechende Notfallprogramme für Ihre Daten. Wenn beispielsweise
        die Hardware bei Google ausfällt oder Naturkatastrophen Server
        lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google
        dennoch gering.
      </p>
      <div className="mb-4"></div>
      <p>
        Standardisiert ist bei Google Analytics eine Aufbewahrungsdauer Ihrer
        Userdaten von 26 Monaten eingestellt. Dann werden Ihre Userdaten
        gelöscht. Allerdings haben wir die Möglichkeit, die Aufbewahrungsdauer
        von Nutzdaten selbst zu wählen. Dafür stehen uns fünf Varianten zur
        Verfügung:
      </p>
      <div className="mb-4"></div>
      <ul className="ml-10 list-outside list-disc">
        <li>Löschung nach 14 Monaten</li>
        <li>Löschung nach 26 Monaten</li>
        <li>Löschung nach 38 Monaten</li>
        <li>Löschung nach 50 Monaten</li>
        <li>Keine automatische Löschung</li>
      </ul>
      <div className="mb-4"></div>
      <p>
        Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die
        Daten gelöscht. Diese Aufbewahrungsdauer gilt für Ihre Daten, die mit
        Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der
        DoubleClick-Domain) verknüpft sind. Berichtergebnisse basieren auf
        aggregierten Daten und werden unabhängig von Nutzerdaten gespeichert.
        Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu einer
        größeren Einheit.
      </p>
      <br />
      <div className="mb-10"></div>
    </div>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
