import { Municipalities, MunicipalityType } from 'react-denmark-map'

export default function MunicipalitiesExample() {
  const customizeMunicipalities = (municipality: MunicipalityType) => {
    const result = municipalityData.find((item) => item.id === municipality.name)

    if (!result) return

    if (result.population < 40000) {
      return {
        style: {
          fill: 'skyblue'
        }
      }
    }
    return {
      style: {
        fill: 'royalblue'
      }
    }
  }

  const customTooltip = (municipality: MunicipalityType) => {
    const result = municipalityData.find((item) => item.id === municipality.name)

    return (
      <div className="bg-white rounded p-1 text-sm shadow-lg border">
        <p className="font-bold">{municipality.display_name}</p>
        <p>{`Population: ${
          result?.population ? result.population.toLocaleString('en') : 'N/A'
        }`}</p>
      </div>
    )
  }

  return (
    <Municipalities
      className="mt-4 md:mt-20 p-2 sm:p-8 md:w-[750px] mx-auto"
      customTooltip={customTooltip}
      customizeAreas={customizeMunicipalities}
    />
  )
}

const municipalityData: { id: string; population: number }[] = [
  {
    id: 'københavn',
    population: 638117
  },
  {
    id: 'århus',
    population: 352751
  },
  {
    id: 'aalborg',
    population: 219487
  },
  {
    id: 'odense',
    population: 205509
  },
  {
    id: 'vejle',
    population: 116992
  },
  {
    id: 'esbjerg',
    population: 115579
  },
  {
    id: 'frederiksberg',
    population: 103677
  },
  {
    id: 'randers',
    population: 98190
  },
  {
    id: 'viborg',
    population: 96679
  },
  {
    id: 'silkeborg',
    population: 95488
  },
  {
    id: 'horsens',
    population: 92229
  },
  {
    id: 'roskilde',
    population: 88889
  },
  {
    id: 'slagelse',
    population: 79122
  },
  {
    id: 'sønderborg',
    population: 73831
  },
  {
    id: 'gladsaxe',
    population: 69200
  },
  {
    id: 'skanderborg',
    population: 63390
  },
  {
    id: 'køge',
    population: 61475
  },
  {
    id: 'frederikshavn',
    population: 59039
  },
  {
    id: 'svendborg',
    population: 58588
  },
  {
    id: 'rudersdal',
    population: 57024
  },
  {
    id: 'ringkøbing-skjern',
    population: 56182
  },
  {
    id: 'hvidovre',
    population: 53451
  },
  {
    id: 'faaborg-midtfyn',
    population: 51683
  },
  {
    id: 'fredericia',
    population: 51275
  },
  {
    id: 'varde',
    population: 49628
  },
  {
    id: 'kalundborg',
    population: 48487
  },
  {
    id: 'hedensted',
    population: 46773
  },
  {
    id: 'skive',
    population: 45425
  },
  {
    id: 'egedal',
    population: 43.696
  },
  {
    id: 'thisted',
    population: 43160
  },
  {
    id: 'tårnby',
    population: 42670
  },
  {
    id: 'ikast-brande',
    population: 41473
  },
  {
    id: 'furesø',
    population: 41001
  },
  {
    id: 'gribskov',
    population: 40971
  },
  {
    id: 'lolland',
    population: 40539
  },
  {
    id: 'middelfart',
    population: 40539
  },
  {
    id: 'tønder',
    population: 37050
  },
  {
    id: 'faxe',
    population: 36713
  },
  {
    id: 'faxe',
    population: 36713
  },
  {
    id: 'brønderslev',
    population: 36177
  },
  {
    id: 'ringsted',
    population: 34847
  },
  {
    id: 'faxe',
    population: 36713
  },
  {
    id: 'nyborg',
    population: 31933
  },
  {
    id: 'rebild',
    population: 30518
  },
  {
    id: 'nordfyn',
    population: 29549
  },
  {
    id: 'lejre',
    population: 28173
  },
  {
    id: 'billund',
    population: 26551
  },
  {
    id: 'hørsholm',
    population: 24917
  },
  {
    id: 'solrød',
    population: 23441
  },
  {
    id: 'ishøj',
    population: 23131
  },
  {
    id: 'glostrup',
    population: 22979
  },
  {
    id: 'morsø',
    population: 20066
  },
  {
    id: 'morsø',
    population: 20066
  },
  {
    id: 'vallensbæk',
    population: 16515
  },
  {
    id: 'langeland',
    population: 12367
  },
  {
    id: 'læsø',
    population: 1764
  }
]