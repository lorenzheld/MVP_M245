# Circular MVP: Smart-Sort AI ♻️

## Idee
**Problem:** Komplexe und lokal abweichende Trennregeln überfordern Konsumenten exakt im Moment der Entsorgung. Das führt zu massiven Fehlwürfen ("Wishcycling"), verunreinigten Wertstoffströmen und hohen Kosten für kommunale Entsorger.
**Lösung:** Eine digitale Entscheidungshilfe (App), die direkt am Mülleimer ansetzt. Die App identifiziert das Abfallprodukt (im MVP über ein Dropdown simuliert) und zeigt in unter einer Sekunde die korrekte Tonne an, ergänzt durch ein motivierendes Punkte-System.

## Circular Flow
- [ ] Use Longer
- [x] Use Again *(Materialkreislauf durch sortenreines Recyclingmaterial schliessen)*
- [x] Make Clean *(Verunreinigungen und Fehlwürfe in den Wertstoffströmen drastisch reduzieren)*
- [ ] Use Less

## Funktionen
1. **Schnelle Identifikation:** Simulierte Kamera-Schnittstelle zur sofortigen Auswahl eines Abfallprodukts.
2. **Echtzeit-Feedback:** Unmittelbare, farbcodierte Ausgabe der korrekten, lokal gültigen Entsorgungs-Tonne.
3. **Gamification:** Integriertes Anreizsystem (Eco-Punkte), das korrektes Trennen spielerisch belohnt und die Nutzer bei der Stange hält.

## UX & Design Reflexion (Anforderungen)
* **Was ist am Projekt wirklich neu?** Die radikale Reduktion der kognitiven Last beim Entsorgen durch Echtzeit-Feedback in Kombination mit einem sofortigen Belohnungssystem.
* **Kann man das Produkt intuitiv benutzen?** Ja. Es nutzt ein klares Mobile-First-Design mit einem einzigen, dominanten Call-to-Action-Button ohne versteckte Menüs.
* **Wirkt es ansprechend – oder verwirrend?** Farbcodierte Resultat-Karten (Gelb für Plastik, Schwarz für Restmüll) machen das Interface visuell ansprechend und ohne Leseaufwand erfassbar.
* **Braucht man eine Anleitung?** Nein. Der Button "Abfall scannen & sortieren" und das aufpoppende Punkte-Feedback sind komplett selbsterklärend.
* **Was könnte man weglassen?** Wir haben konsequent auf Logins, User-Profile oder Einstellungen verzichtet, um die Einstiegshürde für die Kernfunktion auf null zu senken.

## Deployment
Diese App wird über GitHub Pages veröffentlicht.
**Live Demo:** [https://lorenzheld.github.io/MVP_M245/]

## Roadmap & Zukünftige Funktionen (Ausblick)
Dieses MVP dient der Validierung der Kern-Interaktion (schnelles Feedback + Gamification). Für die Weiterentwicklung zur vollwertigen "Smart-Sort AI" sind folgende Features geplant:

* **Echte KI-Bilderkennung (Computer Vision):** Ablösung der Dropdown-Simulation durch eine Live-Kamera-Integration. Ein Machine-Learning-Modell (z. B. via TensorFlow.js) erkennt den Müll direkt über die Handykamera.
* **Lokalisierung (Geolocation):** Automatische Erkennung der Postleitzahl, um die exakten, gemeindespezifischen Trennregeln aus einer B2G-Datenbank abzurufen, da sich Entsorgungsvorschriften regional stark unterscheiden.
* **Tangible Rewards (Greifbare Belohnungen):** Verknüpfung der simulierten "Eco-Punkte" mit realen Anreizen, wie z. B. Rabatten auf die lokale Sackgebühr oder Gutscheinen für regionale Shops, um die Langzeitmotivation zu sichern.
* **Crowdsourcing / Schwarmintelligenz:** Erkennt die KI eine neue Verpackung nicht, können Nutzer diese manuell taggen. So trainiert die Community das Modell kontinuierlich mit neuen Daten.
* **Edge Computing (Offline-Modus):** Da Mülleimer oft im Keller stehen (schlechter Empfang) und Datenschutz in der eigenen Wohnung oberste Priorität hat, soll die KI-Bildauswertung komplett lokal auf dem Smartphone stattfinden, ohne Bilder in eine Cloud zu laden.
